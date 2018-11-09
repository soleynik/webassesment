package shrpas2.models;



import java.util.ArrayList;



public class Question {
    private Long id;
    private String question;
    private ArrayList<String> choice;
    private String hint;
    private int correct;

    public Question(Long id, String question, ArrayList<String> choice, String hint, int correct) {
        this.id = id;
        this.question = question;
        this.choice = choice;
        this.hint = hint;
        this.correct = correct;
    };

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getQuestion(){
        return question;
    }

    public void setQuestion(String question){
        this.question = question;
    }

    public String getHint(){
        return hint;
    }

    public void setHint(String hint){
        this.hint = hint;
    }

    public int getCorrect(){
        return correct;
    }

    public void setCorrect(int correct){
        this.correct = correct;
    }


}
