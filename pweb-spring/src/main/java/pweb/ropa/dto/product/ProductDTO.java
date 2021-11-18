package pweb.ropa.dto.product;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ProductDTO {

    private Long id;
    private String name;
    private String description;
    private Double price;
    private Boolean destaque;
    private Integer quantity;
    private Long category;
    private String imageUrl;
}
