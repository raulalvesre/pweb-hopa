package pweb.ropa.service.impl;

import java.util.List;
import java.util.stream.Collectors;

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
    public List<ProductDTO> getByName(String name){
        return productRepository.findByNameContaining(name)
                .stream().map(productMapper::toProductDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ProductDTO> getByEmphasis() {
        return productRepository.findByDestaqueTrue()
                .stream().map(productMapper::toProductDTO)
                .collect(Collectors.toList());

    }

    @Override
    public ProductDTO getById(Long id) {
        var product = productRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
        return productMapper.toProductDTO(product);
    }

    @Override
    public List<ProductDTO> getByCategory(String category) {
        return productRepository.findByCategory(category)
                .stream().map(productMapper::toProductDTO)
                .collect(Collectors.toList());
    }
}
