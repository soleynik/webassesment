package shrpas2;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import shrpas2.models.Questions;
import shrpas2.models.QuestionRepo;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class QuestionRepoTest {
    @Autowired
    private QuestionRepo questionRepo;

    @Test
    public void findQuestionsByAssessmentID(){
        List<Questions> questions = this.questionRepo.findByAssessmentid(1);
        assertThat(questions.get(1).getQuestion()).isEqualTo("Stack is used for");
    }
}
