package pweb.ropa.mapper;

import org.mapstruct.Mapper;
import pweb.ropa.dto.product.ProductDTO;
import pweb.ropa.model.Product;

import java.util.List;


@Mapper(componentModel = "spring")
public abstract class ProductMapper {
    public abstract ProductDTO toProductDTO(Product product);
    public abstract List<ProductDTO> toProductDTOList(List<Product> products);
}
