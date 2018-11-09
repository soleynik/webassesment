package shrpas2.models;


import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private long userid;

    // The user's email
    @NotNull
    private String useremail;

    // The user's name
    @NotNull
    private String username;

    @NotNull
    private String userpass;

    private String userphone;

    private String useraddress;

    private String userhomepage;

    private String userphotopath;

    public User() { }

    public User(long id) {
        this.userid = userid;
    }

    public User(String email, String name, String password) {
        this.useremail = email;
        this.username = name;
        this.userpass = password;
    }


    public long getUserid() {
        return userid;
    }

    public void setUserid(long value) {
        this.userid = value;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String value) {
        this.useremail = value;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String value) {
        this.username = value;
    }

    public String getUserpass() {
        return userpass;
    }

    public void setUserpass(String value) {
        this.userpass = value;
    }

    public String getUserphone(){return userphone; };

    public void setUserphone(String userphone){this.userphone = userphone;}

    public String getUseraddress() {return useraddress;}

    public void setUseraddress(String useraddress) { this.useraddress = useraddress; }

    public String getUserhomepage() {return userhomepage;}

    public void setUserhomepage(String userhomepage) {this.userhomepage = userhomepage;}

    public String getUserphotopath() {return userphotopath;}

    public void setUserphotopath(String userphotopath) {this.userphotopath = userphotopath;}
}