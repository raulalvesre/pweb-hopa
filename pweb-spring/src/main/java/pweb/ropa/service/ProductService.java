package pweb.ropa.service;

import org.springframework.data.jpa.domain.Specification;
import pweb.ropa.dto.product.ProductDTO;
import pweb.ropa.model.Product;

import java.util.List;

public interface ProductService {

    ProductDTO getById(Long productId);
    List<ProductDTO> getList(Specification<Product> spec);

}
