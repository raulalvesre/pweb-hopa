package pweb.ropa.dto.auth;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pweb.ropa.validation.Email;
import pweb.ropa.validation.Password;

@Getter
@Setter
@NoArgsConstructor
public class LoginRequest {

    @Email
    private String email;

    @Password
    private String password;

}
