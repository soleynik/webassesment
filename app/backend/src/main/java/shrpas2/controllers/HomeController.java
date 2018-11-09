package shrpas2.controllers;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import shrpas2.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import shrpas2.models.UserRepository;
import shrpas2.services.UserService;
import javax.servlet.ServletException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;


@RestController
@RequestMapping("/auth")
public class HomeController {

    @Autowired
    private UserService userservice;

    @Autowired
    private UserAssessmentRepo userAssessmentDao;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public LoginResponse login(@RequestBody final UserLogin login)
            throws ServletException {

        User user = userservice.getByUseremail(login.getEmail());

        if(user == null||(!login.getPassword().equals(user.getUserpass()))){
            LoginResponse res = new LoginResponse();
            res.setUserid(0);
            return res;
        }
        LoginResponse response = new LoginResponse();
        response.setUsername(user.getUsername());
        response.setUserid(user.getUserid());
        UserAssessment assessment = userAssessmentDao.findByUserid(user.getUserid());
        response.setFinished(assessment.getFinished());
        response.setToken(Jwts.builder().setSubject(user.getUsername())
                .claim("username", user.getUsername()).setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "shrpasteam3").compact());
        /*return new LoginResponse(user.getUserid(), user.getUsername(), Jwts.builder().setSubject(user.getUsername())
                .claim("username", user.getUsername()).setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "shrpasteam3").compact());*/
        return response;
    }

    @SuppressWarnings("unused")
    public static class UserLogin {
        public String email;
        public String password;
        public String getEmail(){
            return email;
        }
        public String getPassword(){
            return password;
        }
        public void setEmail(String email){
            this.email = email;
        }

        public void setPassword(String password){
            this.password = password;
        }
    }

    @SuppressWarnings("unused")
    public static class LoginResponse {
        public String token;
        public String username;
        public long userid;
        public boolean finished;
        public long getUserid(){
            return userid;
        }
        public void setToken(String token){
            this.token = token;
        }

        public void setUsername(String username){
            this.username = username;
        }

        public void setUserid(long userid){
            this.userid = userid;
        }

        public void setFinished(boolean finished) {this.finished = finished;}

       /* public LoginResponse(final long userid, final String username,final String token) {
            this.userid = userid;
            this.username = username;
            this.token = token;
        }*/
    }
}
