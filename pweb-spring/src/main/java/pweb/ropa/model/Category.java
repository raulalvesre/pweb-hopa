package pweb.ropa.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Category {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private long id;

    @Column(name = "nome")
    private String name;

    @JoinColumn
    @OneToMany(fetch = FetchType.LAZY)
    @Column(name = "ProdutoId")
    private Long productId;


}
