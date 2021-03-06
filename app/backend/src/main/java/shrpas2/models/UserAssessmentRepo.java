package shrpas2.models;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserAssessmentRepo extends JpaRepository<UserAssessment, Long> {

    public UserAssessment findByUserid(long userid);
}
