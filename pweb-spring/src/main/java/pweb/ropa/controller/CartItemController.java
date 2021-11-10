package pweb.ropa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pweb.ropa.dto.cart.AddToCartRequest;
import pweb.ropa.dto.cart.CartItemResponse;
import pweb.ropa.dto.cart.UpdateQtdInCartRequest;
import pweb.ropa.service.CartItemService;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<CartItemResponse>> getUserCartItems(@PathVariable Long userId) {
        var response = cartItemService.getUserCartItems(userId);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/{userId}")
    public ResponseEntity<Void> addToCart(@PathVariable Long userId, @RequestBody AddToCartRequest req) {
        cartItemService.addToCart(userId, req.getProductId());
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{userId}")
    public ResponseEntity<Void> updateProductQtd(@PathVariable Long userId, @RequestBody UpdateQtdInCartRequest req) {
        cartItemService.updateQtd(userId, req.getProductId(), req.getNewQtd());
        return ResponseEntity.noContent().build();

    }

    @DeleteMapping("/{userId}/{productId}")
    public ResponseEntity<Void> deleteProductFromCart(@PathVariable Long userId, @PathVariable Long productId) {
        cartItemService.deleteFromCart(userId, productId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> cleanCart(@PathVariable Long userId) {
        cartItemService.cleanCart(userId);
        return ResponseEntity.noContent().build();
    }
    
}
