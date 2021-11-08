package pweb.ropa.dto;

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
    private String category;
    private String imageUrl;
}
