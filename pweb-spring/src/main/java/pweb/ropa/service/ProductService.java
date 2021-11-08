package pweb.ropa.service;

import pweb.ropa.dto.ProductDTO;

import java.util.List;

public interface ProductService {
     List<ProductDTO> getByName(String name);

    List<ProductDTO> getByEmphasis();

    ProductDTO getById(Long id);
}
