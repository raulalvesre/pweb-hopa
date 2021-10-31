package pweb.ropa.service;

import pweb.ropa.dto.NewUserRequest;
import pweb.ropa.dto.LoginRequest;
import pweb.ropa.dto.LoginResponse;
import pweb.ropa.dto.UserResponse;

public interface AuthService {
    LoginResponse getToken(LoginRequest loginRequest);
    UserResponse registerUser(NewUserRequest newUserRequest);
    void sendPasswordToEmail();
}
