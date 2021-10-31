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
import pweb.ropa.dto.NewUserRequest;
import pweb.ropa.dto.UserResponse;
import pweb.ropa.mapper.UserMapper;
import pweb.ropa.model.User;
import pweb.ropa.repository.user.UserRepository;
import pweb.ropa.security.JwtTokenUtil;
import pweb.ropa.service.AuthService;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final JwtTokenUtil jwtTokenUtil;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public LoginResponse getToken(LoginRequest loginRequest) {
        var username = loginRequest.getEmail();
        var password = loginRequest.getPassword();

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));

            User user = userRepository.findByEmail(loginRequest.getEmail()).get(); //can't fail

            String token = jwtTokenUtil.createToken(user.getId(), user.getEmail());

            return new LoginResponse(token);
        } catch (AuthenticationException ex) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Email/senha inválidos");
        }
    }

    @Override
    public UserResponse registerUser(NewUserRequest newUserRequest) {
        var user = userMapper.toUser(newUserRequest);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);

        return userMapper.toUserResponse(user);
    }

    @Override
    public void sendPasswordToEmail() {

    }
}
