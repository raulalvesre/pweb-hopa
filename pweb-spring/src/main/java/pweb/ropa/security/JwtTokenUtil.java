package pweb.ropa.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import java.security.Key;
import java.util.Date;

@Component
@RequiredArgsConstructor
public class JwtTokenUtil {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.validityMs}")
    private long validityInMilliseconds; // 1h

    private Key key;

    private final MyUserDetailsServiceImpl myUserDetailsService;

    public String createToken(Long id, String username) {
        Claims claims = Jwts.claims().setSubject(id.toString());
        claims.put("username", username);
        claims.put("role", "user");

        Date now = new Date();
        Date expiration =  new Date(now.getTime() + validityInMilliseconds);

        byte[] keyBytes = Decoders.BASE64.decode(secret);
        key = Keys.hmacShaKeyFor(keyBytes);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }

    public Authentication getAuthentication(String token) {
        UserDetails userDetails = myUserDetailsService.loadUserByUsername(getUsername(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    public Long getId(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .get("sub", Long.class);
    }

    public String getUsername(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .get("username", String.class);
    }

    public String resolveToken(HttpServletRequest req) {
        String bearerToken = req.getHeader("Authorization");

        if (bearerToken != null && bearerToken.startsWith("Bearer "))
            return bearerToken.substring(7);

        return null;
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Expired or invalid JWT token");
        }
    }
}
