package pweb.ropa.repository;

import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.StringExpression;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;
import org.springframework.data.querydsl.binding.SingleValueBinding;
import org.springframework.stereotype.Repository;
import pweb.ropa.model.Product;
import pweb.ropa.model.QProduct;

import java.util.List;

@Repository
public interface ProductRepository extends
        JpaRepository<Product, Long>,
        QuerydslPredicateExecutor<Product>,
        QuerydslBinderCustomizer<QProduct> {

    List<Product> findAll(Predicate predicate);

    @Override
    default void customize(QuerydslBindings bindings, QProduct root) {
        bindings
                .bind(String.class)
                .first((SingleValueBinding<StringPath, String>) StringExpression::containsIgnoreCase);
    }

}
