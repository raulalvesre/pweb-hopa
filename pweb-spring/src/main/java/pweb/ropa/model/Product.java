package pweb.ropa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pweb.ropa.model.base.Record;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private long id;

    @Column(name = "NomeProduto")
    private String name;

    @Column(name = "Descricao")
    private String description;

    @Column(name = "Valor")
    private Double price;

    @Column(name = "Destaque")
    private Boolean destaque;

    @Column(name = "Quantidade")
    private Integer quantity;

    @Column(name = "Categoria")
    private String category;

    @Column(name = "Imagem")
    private String imageUrl;

}
