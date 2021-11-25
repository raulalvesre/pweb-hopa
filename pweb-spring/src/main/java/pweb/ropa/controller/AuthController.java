package pweb.ropa.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pweb.ropa.dto.auth.ChangePasswordRequest;
import pweb.ropa.dto.auth.LoginRequest;
import pweb.ropa.dto.auth.LoginResponse;
import pweb.ropa.dto.auth.SendRecoveryPasswordEmailRequest;
import pweb.ropa.dto.user.NewUserRequest;
import pweb.ropa.dto.user.UserResponse;
import pweb.ropa.service.AuthService;
import pweb.ropa.service.UserService;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;
    private final UserService userService;

    @PostMapping("/login")
    ResponseEntity<LoginResponse>  login(@RequestBody @Valid LoginRequest req) {
        return ResponseEntity.ok(authService.getToken(req));
    }

    @PostMapping("/register")
    ResponseEntity<UserResponse> register(@RequestBody  @Valid NewUserRequest req) throws Exception {
        return ResponseEntity.ok(userService.createUser(req));
    }

    @PostMapping("/receive-password-recovery-email")
    ResponseEntity<Void> receivePasswordRecoveryEmail(@RequestBody SendRecoveryPasswordEmailRequest req) throws Exception {
        authService.sendChangePasswordEmail(req);
        return ResponseEntity.accepted().build();
    }

    @PutMapping("/change-password")
    ResponseEntity<UserResponse> handlePasswordChange(@RequestBody @Valid ChangePasswordRequest req) throws Exception {
        authService.handlePasswordChange(req);
        return ResponseEntity.noContent().build();
    }
}
