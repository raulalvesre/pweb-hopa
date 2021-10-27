package pweb.ropa.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import pweb.ropa.validation.Email;
import pweb.ropa.validation.Password;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
public class RegisterUserRequest {

    @Size(min = 3, max = 200, message = "Name size must be between 3 and 200")
    @NotBlank(message = "Name must not be blank")
    @JsonProperty
    private String name;

    //@Unique(entity = User.class, field = "username")
    @Size(min = 3, max = 16, message = "Username size must be between 3 and 16")
    @NotBlank(message = "Username must not be blank")
    @JsonProperty
    private String username;

    //@Unique(entity = User.class, field = "email")
    @Email
    @JsonProperty
    private String email;

    @Password
    @JsonProperty
    private String password;

}
