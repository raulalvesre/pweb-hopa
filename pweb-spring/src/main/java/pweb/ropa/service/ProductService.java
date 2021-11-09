package pweb.ropa.service;

import java.util.List;

import pweb.ropa.dto.product.ProductDTO;

public interface ProductService {
    List<ProductDTO> getByName(String name);

    List<ProductDTO> getByEmphasis();

    ProductDTO getById(Long id);
}
