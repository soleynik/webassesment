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
public class QuestionsTest {
    private Questions questions = new Questions(512,0,1024);

    @Test
    public void getQuestionsID(){
        assertThat(questions.getQuestionid()).isEqualTo(512);
    }

    @Test
    public void getAssessmentID(){
        assertThat(questions.getAssessmentid()).isEqualTo(1024);
    }

}
