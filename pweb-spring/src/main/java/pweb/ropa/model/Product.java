package pweb.ropa.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pweb.ropa.model.base.Record;

import java.math.BigDecimal;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String name;

    @Column(name = "descricao")
    private String description;

    @Column(name = "valor", nullable = false, precision = 7, scale = 2)
    private BigDecimal price;

    @Column
    private Boolean destaque;

    @Column(name = "quantidade")
    private Integer quantity;

    @JoinColumn(referencedColumnName = "id", nullable = false,  name = "CategoriaId")
    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    private Category category;

    @Column(name = "imagem")
    private String imageUrl;

}
