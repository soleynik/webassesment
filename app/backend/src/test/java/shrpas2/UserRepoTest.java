package shrpas2;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import shrpas2.models.User;
import shrpas2.models.UserRepository;


import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserRepoTest {
    @Autowired
    private UserRepository userRepo;




    @Test
    public void findUserByEmail(){
        User user = this.userRepo.findOneByUseremail("user2@gmail.com");
        assertThat(user.getUsername()).isEqualTo("testuser2");
        assertThat(user.getUserid()).isEqualTo(2);
    }

    public void findUserByUserID(){
        User user = this.userRepo.findOneByUserid(1);
        assertThat(user.getUsername()).isEqualTo("testuser1");
    }
}
