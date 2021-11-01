package pweb.ropa.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class PasswordRecoveryToken implements Serializable {

    @EmbeddedId
    private PasswordRecoveryTokenPK id;

    @Size(max = 760)
    @NotBlank
    @Column(unique = true, nullable = false)
    private String token;

    public PasswordRecoveryToken(User user, String token) {
        this.token = token;

        var id =  new PasswordRecoveryTokenPK();
        id.user = user;
        id.createdDate = LocalDateTime.now();
        this.id = id;
    }

    @PrePersist
    public void prePersist() {
        id.createdDate = LocalDateTime.now();
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;

        if (!(o instanceof PasswordRecoveryToken))
            return false;

        PasswordRecoveryToken other = (PasswordRecoveryToken)o;
;
        return this.id.user.getId() == other.id.user.getId() ||
                this.id.createdDate.equals(other.id.createdDate);
    }

    @Getter
    @NoArgsConstructor
    @Embeddable
    public static class PasswordRecoveryTokenPK implements Serializable {
        @ManyToOne(cascade = CascadeType.ALL)
        @JoinColumn(name = "user_id", nullable = false)
        private User user;

        @NotNull
        @CreatedDate
        @Column
        private LocalDateTime createdDate;
    }
}