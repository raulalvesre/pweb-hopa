package pweb.ropa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import pweb.ropa.dto.product.ProductDTO;
import pweb.ropa.service.ProductService;

@RestController
@RequestMapping(value = "/produto")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> getProductsByName(@RequestParam String nome){
        var response = productService.getByName(nome);
        return ResponseEntity.ok(response);
    }

    @GetMapping(path = "/destaque")
    public ResponseEntity<List<ProductDTO>> getProductsInDestaque(){
        var response = productService.getByEmphasis();
        return ResponseEntity.ok(response);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<ProductDTO>  getProductById(@PathVariable Long id){
        var response = productService.getById(id);
        return ResponseEntity.ok(response);
    }
}
