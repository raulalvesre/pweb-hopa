package pweb.ropa.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pweb.ropa.dto.*;
import pweb.ropa.mapper.UserMapper;
import pweb.ropa.model.PasswordRecoveryToken;
import pweb.ropa.model.User;
import pweb.ropa.repository.PasswordRecoveryTokenRepository;
import pweb.ropa.repository.UserRepository;
import pweb.ropa.security.JwtTokenUtil;
import pweb.ropa.service.AuthService;

import java.time.temporal.ChronoUnit;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final JwtTokenUtil jwtTokenUtil;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordRecoveryTokenRepository passwordRecoveryTokenRepository;
    private final JavaMailSender emailSender;
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
    public void sendChangePasswordEmail(SendRecoveryPasswordEmailRequest sendRecovEmailPasswdReq) {
        var email = sendRecovEmailPasswdReq.getEmail();
        var user = userRepository
                .findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Sem usuários com o email [" + email +"]"));

        var changePasswordToken = UUID.randomUUID().toString();
        var passwordRecoveryToken = new PasswordRecoveryToken(user, changePasswordToken);

        passwordRecoveryTokenRepository.save(passwordRecoveryToken);

        var message = new SimpleMailMessage();
        var messageText = "<a href=\"http//:localhost:4200/recuperar-senha?token=" + changePasswordToken + "\">Clique aqui para resetar sua senha</a>";
        message.setSubject("ROPA: Resetar senha");
        message.setTo("raul.alves.re@gmail.com");
        message.setText(messageText);
        emailSender.send(message);
    }

    @Override
    public void handlePasswordChange(ChangePasswordRequest changePasswordRequest) {
        var dbToken = passwordRecoveryTokenRepository
                .findByToken(changePasswordRequest.getToken())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Token de recuperação não encontrado"));

        var tokenDate = dbToken.getId().getCreatedDate();
        if (tokenDate.isAfter(tokenDate.plus(2, ChronoUnit.HOURS)))
            throw new ResponseStatusException(HttpStatus.GONE, "Token de recuperação expirado");

       var user = dbToken.getId().getUser();
       user.setPassword(passwordEncoder.encode(changePasswordRequest.getNewPassword()));

        userRepository.save(user);
    }
}
