package pweb.ropa.dto.auth;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pweb.ropa.validation.Password;

@Getter
@Setter
@NoArgsConstructor
public class ChangePasswordRequest {

    private String token;

    @Password
    private String newPassword;

}
