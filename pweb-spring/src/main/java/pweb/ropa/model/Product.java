package pweb.ropa.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue
    @Column(name = "Codigo")
    private Integer id;

    @Column(name = "NomeProduto")
    private String name;

    @Column(name = "Descricao")
    private String description;

    @Column(name = "Valor")
    private Double price;

    @Column(name = "Destaque")
    private Boolean flagDestaque;

    @Column(name = "Quantidade")
    private Integer quantity;

    @Column(name = "Categoria")
    private String category;

    @Column(name = "Imagem")
    private String imageUrl;
}
