package pweb.ropa.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pweb.ropa.model.PasswordRecoveryToken;

import java.util.Optional;

@Repository
public interface PasswordRecoveryTokenRepository extends CrudRepository<PasswordRecoveryToken, PasswordRecoveryToken.PasswordRecoveryTokenPK> {
    Optional<PasswordRecoveryToken> findByToken(String token);
}
