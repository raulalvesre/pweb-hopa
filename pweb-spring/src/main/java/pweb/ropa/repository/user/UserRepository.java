package pweb.ropa.repository.user;

import org.springframework.data.repository.CrudRepository;
import pweb.ropa.model.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    boolean existsByEmail(String email);
    boolean existsByCpf(String email);
    boolean existsByTelephone(String email);

    Optional<User> findByEmail(String username);

}
