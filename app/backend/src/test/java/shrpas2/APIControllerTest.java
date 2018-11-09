package shrpas2;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringRunner;
import shrpas2.controllers.APIController.QuestionJson;
import shrpas2.controllers.APIController.profileJson;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class APIControllerTest {
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void GetQuizTest(){
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "FORTEST");
        HttpEntity entity = new HttpEntity(headers);
        ParameterizedTypeReference<List<QuestionJson>> paramType = new ParameterizedTypeReference<List<QuestionJson>>() {};
        ResponseEntity<List<QuestionJson>> Questions = this.restTemplate
                .exchange("/api/assessment/quiz/1", HttpMethod.GET, entity, paramType);
        assertThat(Questions.getBody().get(1).getQuestion()).isEqualTo("Stack is used for");
    }

    @Test
    public void PostAnwsersTest(){
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "FORTEST");
        HttpEntity entity = new HttpEntity(Arrays.asList(0,2,3),headers);
        String score = this.restTemplate.postForObject("/api/assessment/quiz/1", entity, String.class);
        assertThat(score).isEqualTo("100");

    }

    @Test
    public void getProfile(){
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "FORTEST");
        HttpEntity entity = new HttpEntity(headers);
        ParameterizedTypeReference<profileJson> paramType = new ParameterizedTypeReference<profileJson>() {};
        ResponseEntity<profileJson> profile = this.restTemplate
                .exchange("/api/userprofile/1", HttpMethod.GET, entity, paramType);
        assertThat(profile.getBody().getPhone()).isInstanceOf(String.class);
        assertThat(profile.getBody().getAddress()).isInstanceOf(String.class);
    }

    @Test
    public void postProfile(){
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "FORTEST");
        profileJson json = new profileJson();
        HttpEntity entity = new HttpEntity(headers);
        ParameterizedTypeReference<profileJson> paramType = new ParameterizedTypeReference<profileJson>() {};
        ResponseEntity<profileJson> profile = this.restTemplate
                .exchange("/api/userprofile/1", HttpMethod.GET, entity, paramType);
        profileJson currentProfile = profile.getBody();
        entity = new HttpEntity(json,headers);
        json.setProfile(currentProfile.getPhone(),currentProfile.getAddress(),currentProfile.getHomepage(),currentProfile.getPhotopath());
        ResponseEntity<?> responseEntity = this.restTemplate
                .exchange("/api/userprofile/1", HttpMethod.POST, entity, RequestEntity.class);
        assertThat(responseEntity.getStatusCodeValue()).isEqualTo(200);
    }


}
