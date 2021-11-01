package pweb.ropa.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pweb.ropa.dto.NewUserRequest;
import pweb.ropa.dto.UserResponse;
import pweb.ropa.mapper.UserMapper;
import pweb.ropa.repository.UserRepository;
import pweb.ropa.service.UserService;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public UserResponse getById(long userId) throws Exception {
        var user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "User not found"));

        return userMapper.toUserResponse(user);
    }


    public UserResponse createUser(NewUserRequest newUserRequest) throws Exception {
        var user = userMapper.toUser(newUserRequest);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);

        return userMapper.toUserResponse(user);
    }

    public void deleteUser(long userId) throws Exception {
        var user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "User not found"));

        userRepository.delete(user);
    }

    public boolean isEmailAlreadyRegistered(String email) {
        return userRepository.existsByEmail(email);
    }

    public boolean isCpfAlreadyRegistered(String cpf) {
        return userRepository.existsByCpf(cpf);
    }

    public boolean isTelephoneAlreadyRegistered(String telephone) {
        return userRepository.existsByTelephone(telephone);
    }
}
