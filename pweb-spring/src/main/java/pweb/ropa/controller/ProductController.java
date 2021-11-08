package pweb.ropa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pweb.ropa.dto.ProductDTO;
import pweb.ropa.repository.ProductRepository;
import pweb.ropa.service.ProductService;

import java.util.List;

@RestController
@RequestMapping(value = "/produto")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> getProductByName(@RequestParam String nome){
        var response = productService.getByName(nome);
        return ResponseEntity.ok(response);
    }

    @GetMapping(path = "/destaque")
    public ResponseEntity<List<ProductDTO>> getProduuctByDestaque(){
        var response = productService.getByEmphasis();
        return ResponseEntity.ok(response);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<ProductDTO>  getProductById(@PathVariable Long id){
        var response = productService.getById(id);
        return ResponseEntity.ok(response);
    }
}
