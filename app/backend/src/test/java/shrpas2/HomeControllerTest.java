package shrpas2;


import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import shrpas2.controllers.HomeController.UserLogin;
import shrpas2.controllers.HomeController.LoginResponse;
import shrpas2.Application;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT, classes = Application.class)
public class HomeControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void LoginTest() {
        UserLogin loginuser = new UserLogin();
        loginuser.setEmail("user1@gmail.com");
        loginuser.setPassword("testuser1");
        LoginResponse result = this.restTemplate.postForObject("/auth/login", loginuser, LoginResponse.class);
        assertThat(result.getUserid()).isEqualTo(1);
    }

    @Test
    public void LoginFailedTest() {
        UserLogin loginuser = new UserLogin();
        loginuser.setEmail("user1@gmail.com");
        loginuser.setPassword("testuser2");
        LoginResponse result = this.restTemplate.postForObject("/auth/login", loginuser, LoginResponse.class);
        assertThat(result.getUserid()).isEqualTo(0);
    }
}