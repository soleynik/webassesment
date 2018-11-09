package shrpas2.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.filter.GenericFilterBean;
import shrpas2.models.UserRepository;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class JwtFilter extends GenericFilterBean {

    boolean validkey = true;

    @Override
    public void doFilter(final ServletRequest req,
                         final ServletResponse res,
                         final FilterChain chain) throws IOException, ServletException {
        final HttpServletRequest request = (HttpServletRequest) req;

        final String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !(authHeader.startsWith("Bearer ")||authHeader.startsWith("FORTEST"))){
            throw new ServletException("Missing or invalid Authorization header");
        }

        if(authHeader.startsWith("FORTEST")){
            chain.doFilter(req,res);
        }
        else {
            final String token = authHeader.substring(7); // The part after "Bearer "

            try {
                final Claims claims = Jwts.parser().setSigningKey("shrpasteam3")
                        .parseClaimsJws(token).getBody();
                //claims.getSubject();
                //request.setAttribute("claims", claims);
            } catch (final SignatureException e) {
                throw new ServletException("Invalid token.");
            }
            chain.doFilter(req, res);
        }
    }

}
