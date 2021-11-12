package pweb.ropa.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import com.querydsl.core.types.Predicate;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import lombok.RequiredArgsConstructor;
import pweb.ropa.dto.product.ProductDTO;
import pweb.ropa.mapper.ProductMapper;
import pweb.ropa.repository.ProductRepository;
import pweb.ropa.service.ProductService;

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
    public List<ProductDTO> getList(Predicate predicate) {
        var products =  productRepository.findAll(predicate);

        return productMapper.toProductDTOList(products);
    }

}
