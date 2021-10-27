package pweb.ropa.repository.user;

import org.springframework.data.repository.CrudRepository;
import pweb.ropa.model.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    boolean existsByUsername(String username);
    boolean existsByEmail(String email);

    boolean existsByUsernameAndIdNot(String username, long existingUserId);
    boolean existsByEmailAndIdNot(String email, long existingUserId);

    Optional<User> findByUsername(String username);

}
