package pweb.ropa.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pweb.ropa.dto.product.ProductDTO;
import pweb.ropa.mapper.ProductMapper;
import pweb.ropa.model.Product;
import pweb.ropa.repository.ProductRepository;
import pweb.ropa.service.ProductService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    @Override
    public ProductDTO getById(Long productId) {
        var product = productRepository.findById(productId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

        return productMapper.toProductDTO(product);
    }

    @Override
    public List<ProductDTO> getList(Specification<Product> spec) {
        var products =  productRepository.findAll(spec);

        return productMapper.toProductDTOList(products);
    }

}
