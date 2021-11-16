package pweb.ropa.controller;

import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
    ResponseEntity<List<ProductDTO>> getList(
            @QuerydslPredicate(root = Product.class) Predicate predicate) throws Exception {
        var response = this.productService.getList(predicate);
        return ResponseEntity.ok(response);
    }
}
