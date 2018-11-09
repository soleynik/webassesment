package shrpas2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shrpas2.models.User;
import shrpas2.models.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserRepository getUserRepository() {
        return userRepository;
    }

    public User getByUseremail(String email) {
        return this.userRepository.findOneByUseremail(email);
    }

    public User getByUserId(long userid) {return this.userRepository.findOneByUserid(userid);}

    public void update(User user) {this.userRepository.save(user); }
}
