package pweb.ropa.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pweb.ropa.dto.LoginRequest;
import pweb.ropa.dto.LoginResponse;
import pweb.ropa.dto.RegisterUserRequest;
import pweb.ropa.dto.UserResponse;
import pweb.ropa.service.AuthService;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    ResponseEntity<LoginResponse>  login(@RequestBody @Valid LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.getToken(loginRequest));
    }

    @PostMapping("/register")
    ResponseEntity<UserResponse> register(@RequestBody  @Valid RegisterUserRequest newUser) throws Exception {
        return ResponseEntity.ok(authService.registerUser(newUser));
    }

//    @PostMapping("/recover-password")
//    ResponseEntity<UserResponse> recoverPassword(@RequestBody  @Valid RegisterUserRequest newUser) throws Exception {
//        return ResponseEntity.ok(authService.registerUser(newUser));
//    }
}
