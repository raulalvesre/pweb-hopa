package pweb.ropa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import pweb.ropa.dto.cart.AddToCartRequest;
import pweb.ropa.dto.cart.CartItemResponse;
import pweb.ropa.dto.cart.UpdateQtdInCartRequest;
import pweb.ropa.security.MyUserDetails;
import pweb.ropa.service.CartItemService;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @GetMapping
    public ResponseEntity<List<CartItemResponse>> getUserCartItems(Authentication authentication) {
        var currentUserId = ((MyUserDetails) authentication.getPrincipal()).getId();
        var response = cartItemService.getUserCartItems(currentUserId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/quantity")
    public ResponseEntity<Integer> getQuantiyOfItemsInCart(Authentication authentication) {
        var currentUserId = ((MyUserDetails) authentication.getPrincipal()).getId();
        var response = cartItemService.getQuantityOfItemsInCart(currentUserId);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<Void> addToCart(@RequestBody AddToCartRequest req, Authentication authentication) {
        var currentUserId = ((MyUserDetails) authentication.getPrincipal()).getId();
        cartItemService.addToCart(currentUserId, req.getProductId());
        return ResponseEntity.noContent().build();
    }

    @PutMapping
    public ResponseEntity<Void> updateProductQtd(@RequestBody UpdateQtdInCartRequest req, Authentication authentication) {
        var currentUserId = ((MyUserDetails) authentication.getPrincipal()).getId();
        cartItemService.updateQtd(currentUserId, req.getProductId(), req.getNewQtd());
        return ResponseEntity.noContent().build();

    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProductFromCart(@PathVariable Long productId, Authentication authentication) {
        var currentUserId = ((MyUserDetails) authentication.getPrincipal()).getId();
        cartItemService.deleteFromCart(currentUserId, productId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping
    public ResponseEntity<Void> cleanCart(Authentication authentication) {
        var currentUserId = ((MyUserDetails) authentication.getPrincipal()).getId();
        cartItemService.cleanCart(currentUserId);
        return ResponseEntity.noContent().build();
    }

}
