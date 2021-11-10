package pweb.ropa.dto.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import pweb.ropa.model.User;
import pweb.ropa.validation.Email;
import pweb.ropa.validation.Password;
import pweb.ropa.validation.Unique;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
public class NewUserRequest {

    @Size(min = 3, max = 200, message = "Name size must be between 3 and 200")
    @NotBlank(message = "Name must not be blank")
    @JsonProperty
    private String name;

    @Email
    @Unique(entity = User.class, field = "email", message = "Email already registered")
    @JsonProperty
    private String email;

    @Password
    @JsonProperty
    private String password;

    @NotBlank(message = "CPF must not be blank")
    @Pattern(regexp = "([0-9]{2}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[\\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[-]?[0-9]{2})",
            message = "Invalid CPF")
    @Unique(entity = User.class, field = "cpf", message = "CPF already registered")
    private String cpf;

    @NotBlank(message = "Telephone must not be blank")
    @Pattern(regexp = "^\\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\\) (?:[2-8]|9[1-9])[0-9]{3}\\-[0-9]{4}$",
            message = "Invalid telephone")
    @Unique(entity = User.class, field = "telephone", message = "Telephone already registered")
    private String telephone;

}
