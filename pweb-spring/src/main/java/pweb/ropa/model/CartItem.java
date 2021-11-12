package pweb.ropa.model;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import lombok.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CartItem {

    @EmbeddedId
    private CartItemPk id;

    @Column(nullable = false)
    private Integer quantidade;

    @Column(nullable = false, precision = 7, scale = 2)
    private BigDecimal valorUnitario;

    @Column(nullable = false, precision = 7, scale = 2)
    private BigDecimal valorTotal;

    @PrePersist
    @PreUpdate
    public void setarTotal() {
        valorTotal = valorUnitario.multiply(BigDecimal.valueOf(quantidade));
    }
    
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Embeddable
    public static class CartItemPk implements Serializable {
        @ManyToOne
        @JoinColumn(name = "fk_user", referencedColumnName = "id", nullable = false)
        private User user;

        @ManyToOne
        @JoinColumn(name = "fk_product", referencedColumnName = "id", nullable = false)
        private Product product;
    }
}
