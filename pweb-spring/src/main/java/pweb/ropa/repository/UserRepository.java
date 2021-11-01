package pweb.ropa.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pweb.ropa.model.User;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    boolean existsByEmail(String email);
    boolean existsByCpf(String email);
    boolean existsByTelephone(String email);

    Optional<User> findByEmail(String username);

}
