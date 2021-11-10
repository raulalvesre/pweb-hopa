package pweb.ropa.service;

import pweb.ropa.dto.auth.ChangePasswordRequest;
import pweb.ropa.dto.auth.LoginRequest;
import pweb.ropa.dto.auth.LoginResponse;
import pweb.ropa.dto.auth.SendRecoveryPasswordEmailRequest;
import pweb.ropa.dto.user.NewUserRequest;
import pweb.ropa.dto.user.UserResponse;

import javax.mail.MessagingException;

public interface AuthService {
    LoginResponse getToken(LoginRequest loginRequest);
    UserResponse registerUser(NewUserRequest newUserRequest);
    void sendChangePasswordEmail(SendRecoveryPasswordEmailRequest sendRecovEmailPasswdReq) throws MessagingException;
    void handlePasswordChange(ChangePasswordRequest newPassword);
}
