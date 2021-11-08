package pweb.ropa.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Cart {

    @OneToOne(fetch = FetchType.LAZY)
    @Column(name = "CodigoCliente")
    private Long codigoCliente;

    @OneToMany(fetch = FetchType.LAZY)
    @Column(name = "CodigoProduto")
    private Long codigoProduto;

    @Column(name = "Quantidade")
    private Integer quantidade;

    @Column(name = "ValorUnitario")
    private double valorUnitario;

    @Column(name = "ValorTotal")
    private double valorToral;
}
