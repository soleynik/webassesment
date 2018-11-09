package shrpas2;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import shrpas2.models.UserAssessment;
import shrpas2.models.UserAssessmentRepo;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserAssessmentRepoTest {
    @Autowired
    private UserAssessmentRepo userAssessmentRepo;

    @Test
    public void findAssessmentByUserid(){
        UserAssessment userAssessment = this.userAssessmentRepo.findByUserid(1);
        assertThat(userAssessment.getAssessmentid()).isEqualTo(1);
    }
}
