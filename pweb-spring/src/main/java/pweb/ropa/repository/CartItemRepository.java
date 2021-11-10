package pweb.ropa.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import pweb.ropa.model.CartItem;
import pweb.ropa.model.Product;
import pweb.ropa.model.User;

@Repository
public interface CartItemRepository extends CrudRepository<CartItem, CartItem.CartItemPk> {
    List<CartItem> findByIdUser(User user);
    Optional<CartItem> findByIdUserAndIdProduct(User user, Product product);
    void deleteAllByIdUser(User user);
}
