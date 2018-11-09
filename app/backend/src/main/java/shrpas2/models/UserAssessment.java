package shrpas2.models;


import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "userassessment")
public class UserAssessment {

    @Id
    private long userid;
    @NotNull
    private long assessmentid;

    private int score;
    private boolean finished;

    public UserAssessment() { }

    public UserAssessment(long userid, long assessmentid) {
        this.userid = userid;
        this.assessmentid = assessmentid;
    }

    public long getUserid() {
        return userid;
    }

    public long getAssessmentid(){
        return assessmentid;
    }

    public boolean getFinished() {return finished;}

    public void setFinished(boolean finished) {this.finished = finished;}

    public int getScore() {return score;}

    public void setScore(int score) {this.score = score;}

}


