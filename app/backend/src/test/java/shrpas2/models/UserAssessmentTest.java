package shrpas2.models;

import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;
import shrpas2.models.UserAssessment;

import static org.assertj.core.api.Assertions.assertThat;

import shrpas2.models.User;
import java.util.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class UserAssessmentTest {
    private UserAssessment user1 = new UserAssessment(1024, 1024);
    private UserAssessment user2 = new UserAssessment(123, 123);

    @Test
    public void getUserId(){
        assertThat(user1.getUserid()).isEqualTo(1024);
    }

    @Test
    public void getUserAssessmentId(){
        assertThat(user2.getAssessmentid()).isEqualTo(123);
    }

    @Test
    public void getScore() {
        user1.setScore(50);
        assertThat(user1.getScore()).isEqualTo(50);
    }

    @Test
    public void getFinished() {
        user2.setFinished(true);
        assertThat(user2.getFinished()).isEqualTo(true);
    }

}