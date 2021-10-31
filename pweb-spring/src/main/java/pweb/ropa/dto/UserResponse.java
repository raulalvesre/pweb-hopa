package pweb.ropa.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private long id;
    private String name;
    private String email;
    private String cpf;
    private String telephone;
    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;

}
