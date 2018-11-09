package shrpas2.models;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepo extends JpaRepository<Questions, Long>{
        public List<Questions> findByAssessmentid(long id);
}
