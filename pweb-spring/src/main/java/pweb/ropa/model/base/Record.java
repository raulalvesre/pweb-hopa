package pweb.ropa.model.base;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

import static javax.persistence.GenerationType.IDENTITY;

@Getter
@Setter
@NoArgsConstructor
@MappedSuperclass
public abstract class Record {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private long id;

    @NotNull
    @CreatedDate
    @Column
    private LocalDateTime createdDate;

    @LastModifiedDate
    @Column
    private LocalDateTime lastModifiedDate;

    @PrePersist
    public void prePersist() {
        createdDate = LocalDateTime.now();
    }

    @PreUpdate
    public void preUpdate() {
        lastModifiedDate = LocalDateTime.now();
    }

}


