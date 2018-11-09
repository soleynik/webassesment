package shrpas2.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Arrays;
import java.util.List;

@Entity
@Table(name = "questions")
public class Questions{

    @Id
    private  long questionid;

    @NotNull
    private String question;

    private String option1;
    private String option2;
    private String option3;
    private String option4;

    @NotNull
    private int correctanswer;

    @NotNull
    private long assessmentid;

    private String hint;

    public Questions() { }

    public Questions(long id, int correctanswer, long assessmentid){
        this.questionid = id;
        this.correctanswer = correctanswer;
        this.assessmentid = assessmentid;
    }

    public List<String> getOptions(){
        return Arrays.asList(option1,option2,option3,option4);
    }

    public String getQuestion(){
        return question;
    }

    public String getHint() {return hint;}

    public long getQuestionid(){
        return questionid;
    }

    public int getCorrectanswer(){
        return correctanswer;
    }

    public long getAssessmentid(){
        return assessmentid;
    }
}
