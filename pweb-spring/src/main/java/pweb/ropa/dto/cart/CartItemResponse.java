package pweb.ropa.dto.cart;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CartItemResponse {

    private Long productId;
    private String productName;
    private int quantidade;
    private BigDecimal valorUnitario;
    private BigDecimal valorTotal;

}
