package pweb.ropa.service;

import pweb.ropa.dto.*;

public interface AuthService {
    LoginResponse getToken(LoginRequest loginRequest);
    UserResponse registerUser(NewUserRequest newUserRequest);
    void sendChangePasswordEmail(SendRecoveryPasswordEmailRequest sendRecovEmailPasswdReq);
    void handlePasswordChange(ChangePasswordRequest newPassword);
}
