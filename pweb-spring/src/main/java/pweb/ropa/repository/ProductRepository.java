package pweb.ropa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pweb.ropa.model.Product;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository  extends JpaRepository<Product, Long> {
    List<Product> findByNameContaining(String name);

    List<Product> findByDestaqueTrue();

    Optional<Product> findById(Long id);

    List<Product> findByCategory(String category);
}
