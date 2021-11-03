package pweb.ropa.service;

import pweb.ropa.dto.*;

import javax.mail.MessagingException;

public interface AuthService {
    LoginResponse getToken(LoginRequest loginRequest);
    UserResponse registerUser(NewUserRequest newUserRequest);
    void sendChangePasswordEmail(SendRecoveryPasswordEmailRequest sendRecovEmailPasswdReq) throws MessagingException;
    void handlePasswordChange(ChangePasswordRequest newPassword);
}
