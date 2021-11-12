package pweb.ropa.service;

import com.querydsl.core.types.Predicate;
import pweb.ropa.dto.product.ProductDTO;

import java.util.List;

public interface ProductService {

    ProductDTO getById(Long productId);
    List<ProductDTO> getList(Predicate predicate);

}
