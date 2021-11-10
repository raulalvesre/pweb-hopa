package pweb.ropa.dto.cart;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pweb.ropa.dto.product.ProductDTO;

@Getter
@Setter
@NoArgsConstructor
public class CartItemResponse {

    private ProductDTO product;
    private int quantidade;
    private BigDecimal valorTotal;

}
