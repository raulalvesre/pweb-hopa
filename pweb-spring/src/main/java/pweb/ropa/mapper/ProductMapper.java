package pweb.ropa.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import pweb.ropa.dto.product.ProductDTO;
import pweb.ropa.model.Category;
import pweb.ropa.model.Product;
import pweb.ropa.repository.CategoryRepository;

import java.util.List;


@Mapper(componentModel = "spring")
public abstract class ProductMapper {
    @Autowired
    protected CategoryRepository categoryRepository;

    @Mapping(target = "category", source = "category.id")
    public abstract ProductDTO toProductDTO(Product product);
    public abstract List<ProductDTO> toProductDTOList(List<Product> products);
    @Named("getCategoryFromDb")
    public Category getCategoryFromDb(Long categoriaId) {
        return categoryRepository.findById(categoriaId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid id, try again!"));
    }
}
