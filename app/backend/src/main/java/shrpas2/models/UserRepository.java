package shrpas2.models;


import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;


@Transactional
public interface UserRepository extends JpaRepository<User, Long> {

    public User findOneByUserid(long id);
    public User findOneByUseremail(String email);
    public List<User> findAll();
}