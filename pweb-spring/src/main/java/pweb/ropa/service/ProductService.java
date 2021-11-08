package pweb.ropa.service;

import pweb.ropa.dto.ProductDTO;

public interface ProductService {
    public ProductDTO getByName(String name);
}
