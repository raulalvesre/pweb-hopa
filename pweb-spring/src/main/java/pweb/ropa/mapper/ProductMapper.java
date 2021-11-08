package pweb.ropa.mapper;

import org.mapstruct.Mapper;
import pweb.ropa.dto.ProductDTO;
import pweb.ropa.model.Product;

@Mapper(componentModel = "spring")
public abstract class ProductMapper {
    public abstract ProductDTO toProductDTO(Product product);
}
