package pweb.ropa.repository;

import org.mapstruct.Mapper;
import org.springframework.data.jpa.repository.JpaRepository;
import pweb.ropa.model.Category;

@Mapper
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
