package pweb.ropa.model;

import lombok.*;
import pweb.ropa.model.base.Record;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User extends Record {

    @Size(max = 200)
    @NotBlank
    @Column(nullable = false)
    private String name;

    @Size(max = 200)
    @NotBlank
    @Column(unique = true, nullable = false)
    private String email;

    @Size(max = 500)
    @NotBlank
    @Column(nullable = false)
    private String password;

    @Size(max = 15)
    @NotBlank
    @Column(unique = true, nullable = false)
    private String cpf;

    @Size(max = 15)
    @NotBlank
    @Column(unique = true, nullable = false)
    private String telephone;

}

