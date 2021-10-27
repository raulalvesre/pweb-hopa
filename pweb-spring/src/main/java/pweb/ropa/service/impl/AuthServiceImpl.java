package pweb.ropa.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pweb.ropa.dto.LoginRequest;
import pweb.ropa.dto.LoginResponse;
import pweb.ropa.dto.RegisterUserRequest;
import pweb.ropa.dto.UserResponse;
import pweb.ropa.mapper.UserMapper;
import pweb.ropa.model.User;
import pweb.ropa.repository.user.UserRepository;
import pweb.ropa.security.JwtTokenUtil;
import pweb.ropa.service.AuthService;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.HttpStatus.CONFLICT;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final JwtTokenUtil jwtTokenUtil;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public LoginResponse getToken(LoginRequest loginRequest) {
        var username = loginRequest.getUsername();
        var password = loginRequest.getPassword();

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));

            User user = userRepository.findByUsername(loginRequest.getUsername()).get(); //can't fail

            String token = jwtTokenUtil.createToken(user.getId(), user.getUsername());

            return new LoginResponse(token);
        } catch (AuthenticationException ex) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username/password");
        }
    }

    @Override
    public UserResponse registerUser(RegisterUserRequest registerUserRequest) {
        var conflicts = getConflicts(registerUserRequest.getUsername(), registerUserRequest.getEmail(), null);
        if (!conflicts.isEmpty())
            throw new ResponseStatusException(CONFLICT, String.join("; ", conflicts));

        var user = userMapper.toUser(registerUserRequest);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);

        return userMapper.toUserResponse(user);
    }

    private List<String> getConflicts(String username, String email, Long existingUserId) {
        var conflicts = new ArrayList<String>();

        if (isUsernameAlreadyRegistered(username, existingUserId)) {
            String msg = String.format("Username [%s] is already registered", username);
            conflicts.add(msg);
        }

        if (isEmailAlreadyRegistered(email, existingUserId)) {
            String msg = String.format("Email [%s] is already registered", email);
            conflicts.add(msg);
        }

        return conflicts;
    }

    public boolean isUsernameAlreadyRegistered(String username, Long existingUserId) {
        if (existingUserId != null)
            return userRepository.existsByUsernameAndIdNot(username, existingUserId);

        return userRepository.existsByUsername(username);
    }

    public boolean isEmailAlreadyRegistered(String email, Long existingUserId) {
        if (existingUserId != null)
            return userRepository.existsByEmailAndIdNot(email, existingUserId);

        return userRepository.existsByEmail(email);
    }

    @Override
    public void sendPasswordToEmail() {

    }
}
