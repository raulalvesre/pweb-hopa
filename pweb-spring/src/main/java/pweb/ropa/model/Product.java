package pweb.ropa.model;

import javax.persistence.*;

import com.querydsl.core.annotations.QueryEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pweb.ropa.model.base.Record;

import java.math.BigDecimal;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@QueryEntity
@Getter
@Setter
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private long id;

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

    @JoinColumn
    @ManyToOne(fetch = FetchType.LAZY)
    @Column(name = "CategoriaId")
    private Category categoryId;

    @Column(name = "imagem")
    private String imageUrl;

}
