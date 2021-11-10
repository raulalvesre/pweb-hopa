package pweb.ropa.service;

import java.util.List;

import pweb.ropa.dto.cart.CartItemResponse;

public interface CartItemService {

    List<CartItemResponse> getUserCartItems(Long userId);
    void addToCart(Long userId, Long productId);
    void updateQtd(Long userId, Long productId, int newQtd);
    void deleteFromCart(Long userId, Long productId);
    void cleanCart(Long userId);
    
}
