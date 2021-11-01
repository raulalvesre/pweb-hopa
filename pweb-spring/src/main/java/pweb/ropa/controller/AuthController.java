package pweb.ropa.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pweb.ropa.dto.*;
import pweb.ropa.service.AuthService;
import pweb.ropa.service.UserService;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
public class AuthController {

    private final AuthService authService;
    private final UserService userService;

    @PostMapping("/login")
    ResponseEntity<LoginResponse>  login(@RequestBody @Valid LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.getToken(loginRequest));
    }

    @PostMapping("/register")
    ResponseEntity<UserResponse> register(@RequestBody  @Valid NewUserRequest newUser) throws Exception {
        return ResponseEntity.ok(userService.createUser(newUser));
    }

    @PostMapping("/receive-password-recovery-email")
    ResponseEntity<Void> receivePasswordRecoveryEmail(@RequestBody SendRecoveryPasswordEmailRequest sendRecovEmailPasswdReq) throws Exception {
        authService.sendChangePasswordEmail(sendRecovEmailPasswdReq);
        return ResponseEntity.accepted().build();
    }

    @PutMapping("/change-password")
    ResponseEntity<UserResponse> handlePasswordChange(@RequestBody @Valid ChangePasswordRequest changePasswordRequest) throws Exception {
        authService.handlePasswordChange(changePasswordRequest);
        return ResponseEntity.noContent().build();
    }
}
