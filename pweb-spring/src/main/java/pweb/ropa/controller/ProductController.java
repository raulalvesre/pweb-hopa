package pweb.ropa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import pweb.ropa.dto.ProductDTO;
import pweb.ropa.service.ProductService;

@Controller
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/produto")
    public ProductDTO getProductByName(String name_produto){
        return productService.getByName(name_produto);
    }
}
