package pweb.ropa.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pweb.ropa.dto.ProductDTO;
import pweb.ropa.mapper.ProductMapper;
import pweb.ropa.model.Product;
import pweb.ropa.repository.ProductRepository;
import pweb.ropa.service.ProductService;

import java.util.List;
import java.util.stream.Collectors;

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
        return productRepository.findByCategoria(category)
                .stream().map(productMapper::toProductDTO)
                .collect(Collectors.toList());
    }
}
