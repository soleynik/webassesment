package shrpas2;

import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

import shrpas2.models.Question;
import java.util.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class QuestionTest {

	@Autowired
	private TestRestTemplate restTemplate;

    
    public static Question getQuestionObject() {
        ArrayList<String> choices = new ArrayList<>();
        choices.add("Queue");
        choices.add("Graph");
        choices.add("Stack");
        choices.add("Treee");
        return new Question(1234L, "What structure is FIFO?",
                            choices, "First In First Out", 0);
    }

    Question q = getQuestionObject();   

	@Test
	public void getIdTest() {
        assertThat(q.getId()).isEqualTo(1234L);
	}
	
    @Test
    public void setIdTest() {
        q.setId(5678L);
        assertThat(q.getId()).isEqualTo(5678L);
    }

    @Test
    public void getQuestionTest() {
        assertThat(q.getQuestion()).isEqualTo("What structure is FIFO?");
    }

    @Test
    public void setQuestionTest() {
        q.setQuestion("What structure is LIFO?");
        assertThat(q.getQuestion()).isEqualTo("What structure is LIFO?");
    }

    @Test
    public void getHintTest() {
        assertThat(q.getHint()).isEqualTo("First In First Out");
    }

    @Test
    public void setHintTest() {
        q.setHint("Last In First Out");
        assertThat(q.getHint()).isEqualTo("Last In First Out");
    }

    @Test
    public void getCorrectTest() {
        assertThat(q.getCorrect()).isEqualTo(0);
    }

    @Test
    public void setCorrectTest() {
        q.setCorrect(1);
        assertThat(q.getCorrect()).isEqualTo(1);
    }
}