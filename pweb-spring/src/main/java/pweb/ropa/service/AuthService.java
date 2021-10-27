package pweb.ropa.service;

import pweb.ropa.dto.RegisterUserRequest;
import pweb.ropa.dto.LoginRequest;
import pweb.ropa.dto.LoginResponse;
import pweb.ropa.dto.UserResponse;

public interface AuthService {
    LoginResponse getToken(LoginRequest loginRequest);
    UserResponse registerUser(RegisterUserRequest registerUserRequest);
    void sendPasswordToEmail();
}
