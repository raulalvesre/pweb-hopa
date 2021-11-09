package pweb.ropa.service;

import java.util.List;

import pweb.ropa.dto.cart.CartItemResponse;

public interface CartItemService {

    void addToCart(Long userId, Long productId);
    void updateQtd(Long userId, Long productId, int newQtd);
    void deleteFromCart(Long userId, Long productId);
    List<CartItemResponse> getUserCartItems(Long userId);
}
