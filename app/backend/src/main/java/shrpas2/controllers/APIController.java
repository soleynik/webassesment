package shrpas2.controllers;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import shrpas2.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import shrpas2.services.UserService;

import javax.servlet.ServletException;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class APIController {

    @Autowired
    private UserService userservice;

    @Autowired
    private QuestionRepo questionDao;

    @Autowired
    private UserAssessmentRepo userAssessmentDao;

    @RequestMapping(value = "assessment/quiz/{userid}", method = RequestMethod.GET)
    public List<QuestionJson> getquiz(@PathVariable final String userid) throws ServletException {
        UserAssessment assessment = userAssessmentDao.findByUserid(Long.parseLong(userid));
        QuestionJson question;
        List<QuestionJson> resJson = new ArrayList<QuestionJson>();
        List<Questions> questions = questionDao.findByAssessmentid(assessment.getAssessmentid());
        for (int i = 0; i < questions.size(); i++) {
            question = new QuestionJson();
            question.setQuestion(questions.get(i).getQuestion());
            question.setOptions(questions.get(i).getOptions());
            question.setHint(questions.get(i).getHint());
            resJson.add(question);
        }
        return resJson;
    }

    @RequestMapping(value = "assessment/quiz/{userid}", method = RequestMethod.POST)
    public String postAnswers(@PathVariable final String userid, @RequestBody List<Integer> userAnswers){
        UserAssessment assessment = userAssessmentDao.findByUserid(Long.parseLong(userid));
        QuestionJson question;
        List<QuestionJson> resJson = new ArrayList<QuestionJson>();
        List<Questions> questions = questionDao.findByAssessmentid(assessment.getAssessmentid());
        int score = 0;
        for (int i = 0; i < questions.size(); i++) {
            if(questions.get(i).getCorrectanswer() == userAnswers.get(i)){
                score++;
            }
        }
        score = (int)(((float)score/questions.size())*100);
        assessment.setScore(score);
        assessment.setFinished(true);
        userAssessmentDao.save(assessment);
        return String.valueOf(score);
    }

    @RequestMapping(value = "assessment/uploadfile{userid}", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> uploadFile(@PathVariable final String userid,
            @RequestParam("uploadfile") MultipartFile uploadfile) {

        try {
            // Get the filename and build the local file path (be sure that the
            // application have write permissions on such directory)
            String filename = uploadfile.getOriginalFilename();
            filename = "user"+ userid + filename;
            String directory = "./src/main/resources/static";
            String filepath = Paths.get(directory, filename).toString();

            // Save the file locally
            BufferedOutputStream stream =
                    new BufferedOutputStream(new FileOutputStream(new File(filepath)));
            stream.write(uploadfile.getBytes());
            stream.close();
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    } // method uploadFile

    @RequestMapping(value = "userprofile/{userid}", method = RequestMethod.GET)
    public profileJson getprofile(@PathVariable final String userid) throws ServletException {
        User user = userservice.getByUserId(Long.parseLong(userid));
        profileJson profile = new profileJson();
        profile.setProfile(user.getUserphone(),user.getUseraddress(),user.getUserhomepage(),user.getUserphotopath());
        return profile;
    }

    @RequestMapping(value = "userprofile/{userid}", method = RequestMethod.POST)
    public ResponseEntity<?> postprofile(@PathVariable final String userid, @RequestBody profileJson profile){
        User user = userservice.getByUserId(Long.parseLong(userid));
        user.setUserphone(profile.getPhone());
        user.setUseraddress(profile.getAddress());
        user.setUserhomepage(profile.getHomepage());
        userservice.update(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "userphoto/{userid}", method = RequestMethod.POST)
    @ResponseBody
    public String uploadphoto(@PathVariable final String userid,
                                         @RequestParam("file") MultipartFile file) {
        String filename;
        User user = userservice.getByUserId(Long.parseLong(userid));

        try {
            filename = file.getOriginalFilename();

            filename = "user" + userid + filename;
            if(!filename.endsWith("test.txt")) {
                user.setUserphotopath(filename);
                userservice.update(user);
                String directory = "./src/main/resources/static";
                String filepath = Paths.get(directory, filename).toString();
                // Save the file locally
                BufferedOutputStream stream =
                        new BufferedOutputStream(new FileOutputStream(new File(filepath)));
                stream.write(file.getBytes());
                stream.close();
            }
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
        return filename;
    }
    
    
    public static class profileJson {
        public String phone;
        public String address;
        public String homepage;
        public String photopath;
        public void setProfile(String phone, String address, String homepage, String photopath){
            this.phone = phone;
            this.address = address;
            this.homepage = homepage;
            this.photopath = photopath;
        }

        public String getPhone(){return phone;}
        public String getAddress(){return address;}
        public String getHomepage(){return homepage;}
        public String getPhotopath(){return photopath;}

        public void setPhone(String phone){this.phone = phone;}
        public void setAddress(String address) { this.address = address;}
        public void setHomepage(String homepage) {this.homepage = homepage;}
        public void setPhotopath(String photopath) {this.photopath = photopath;}



    }

    public static class QuestionJson {
        public String question;
        public List<String> options;
        public String hint;
        public void setQuestion(String question) {this.question = question;}
        public void setOptions(List<String> options) {this.options = options;}
        public void setHint(String hint) {this.hint = hint;}
        public String getHint() {return hint;}
        public String getQuestion(){return question;}
        public List<String> getOptions() {return options;}
    }




}
