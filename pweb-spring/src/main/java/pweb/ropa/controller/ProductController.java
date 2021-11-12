package pweb.ropa.controller;

import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @GetMapping
    ResponseEntity<List<ProductDTO>> getList(
            @QuerydslPredicate(root = Product.class) Predicate predicate,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "500") int size) throws Exception {
        var response = this.productService.getList(predicate);
        return ResponseEntity.ok(response);
    }
}
