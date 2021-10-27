package pweb.ropa.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pweb.ropa.model.User;
import pweb.ropa.repository.user.UserRepository;


@Service
@RequiredArgsConstructor
public class MyUserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user =  userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return org.springframework.security.core.userdetails.User//
                .withUsername(username)//
                .password(user.getPassword())//
                .roles("USER")
                .accountExpired(false)//
                .accountLocked(false)//
                .credentialsExpired(false)//
                .disabled(false)//
                .build();
    }

}
