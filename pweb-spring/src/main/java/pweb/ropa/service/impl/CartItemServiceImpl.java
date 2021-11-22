package pweb.ropa.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pweb.ropa.dto.cart.CartItemResponse;
import pweb.ropa.mapper.CartItemMapper;
import pweb.ropa.model.CartItem;
import pweb.ropa.repository.CartItemRepository;
import pweb.ropa.repository.ProductRepository;
import pweb.ropa.repository.UserRepository;
import pweb.ropa.service.CartItemService;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CartItemServiceImpl implements CartItemService {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final CartItemRepository cartItemRepository;
    private final CartItemMapper cartItemMapper;

    @Override
    public List<CartItemResponse> getUserCartItems(Long userId) {
        var user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        return cartItemRepository.findByIdUser(user).stream()
                .map(cartItemMapper::toCartItemResponse)
                .collect(Collectors.toList());
    }

    @Override
    public Integer getQuantityOfItemsInCart(Long userId) {
        var user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        return cartItemRepository.countByIdUser(user);
    }

    @Override
    public void addToCart(Long userId, Long productId) {
        var user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        var product = productRepository.findById(productId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

        var cartItem = cartItemRepository.findByIdUserAndIdProduct(user, product)
                .orElse(null);

        if (cartItem != null) {
            cartItem.setQuantidade(cartItem.getQuantidade()+1);
            cartItemRepository.save(cartItem);
            return;
        }

        cartItem = CartItem.builder()
                    .id(new CartItem.CartItemPk(user, product))
                    .quantidade(1)
                    .valorUnitario(product.getPrice())
                    .build();

        cartItemRepository.save(cartItem);
    }

    @Override
    public void updateQtd(Long userId, Long productId, int newQtd) {
        var user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        var product = productRepository.findById(productId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

        var cartItem = cartItemRepository.findByIdUserAndIdProduct(user, product)
                .orElse(null);

        if (cartItem != null) {
            cartItem.setQuantidade(newQtd);
            cartItemRepository.save(cartItem);
            return;
        }

        cartItem = CartItem.builder()
                .id(new CartItem.CartItemPk(user, product))
                .quantidade(newQtd)
                .valorUnitario(product.getPrice())
                .build();
        cartItemRepository.save(cartItem);
    }

    @Override
    public void deleteFromCart(Long userId, Long productId) {
        var user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        var product = productRepository.findById(productId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

        var cartItem = cartItemRepository.findByIdUserAndIdProduct(user, product)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cart item not found"));

        cartItemRepository.delete(cartItem);
    }

    @Transactional
    public void cleanCart(Long userId) {
        var user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        cartItemRepository.deleteAllByIdUser(user);
    }

}
