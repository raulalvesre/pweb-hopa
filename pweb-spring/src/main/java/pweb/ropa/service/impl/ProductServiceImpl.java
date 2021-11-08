package pweb.ropa.service.impl;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pweb.ropa.dto.ProductDTO;
import pweb.ropa.mapper.ProductMapper;
import pweb.ropa.repository.ProductRepository;
import pweb.ropa.service.ProductService;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;
    private ProductMapper productMapper;

    @Override
    public ProductDTO getByName(String name_produto){
        var  productName = productRepository.findByName(name_produto)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Product not found"));

        return productMapper.toProductDTO(productName);
    }
}
