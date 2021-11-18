package pweb.ropa.controller;

import com.turkraft.springfilter.boot.Filter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pweb.ropa.dto.product.ProductDTO;
import pweb.ropa.model.Product;
import pweb.ropa.service.ProductService;

import java.util.List;

@RestController
@RequestMapping(value = "/produto")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/{id}")
    public ResponseEntity<ProductDTO>  getProductById(@PathVariable Long id){
        var response = productService.getById(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    ResponseEntity<List<ProductDTO>> getList(@Filter Specification<Product> spec) throws Exception {
        var response = this.productService.getList(spec);
        return ResponseEntity.ok(response);
    }
}
