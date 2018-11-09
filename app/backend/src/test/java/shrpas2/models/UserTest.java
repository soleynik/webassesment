package shrpas2.models;

import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

import shrpas2.models.User;
import java.util.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class UserTest {
    private User user1 = new User(1024);
    private User user2 = new User("u@gmail.com", "user2", "passwd");

    @Test
    public void setUserId(){
        user1.setUserid(2048);
        assertThat(user1.getUserid()).isEqualTo(2048);
    }

    @Test
    public void setUserEmail(){
        user2.setUseremail("newuser@gmail.com");
        assertThat(user2.getUseremail()).isEqualTo("newuser@gmail.com");
    }

    @Test
    public void setUserName(){
        user2.setUsername("newuser2");
        assertThat((user2.getUsername())).isEqualTo("newuser2");
    }

    @Test
    public void setUserPassword(){
        user2.setUserpass("newpasswd");
        assertThat(user2.getUserpass()).isEqualTo("newpasswd");
    }

    @Test
    public void setUserPhotoPath(){
        user2.setUserphotopath("C:/");
        assertThat(user2.getUserphotopath()).isEqualTo("C:/");
    }
}