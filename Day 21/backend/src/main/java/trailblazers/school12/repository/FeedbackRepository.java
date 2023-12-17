package trailblazers.school12.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import trailblazers.school12.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
	Optional<Feedback> findByNameAndEmail(String name, String email);
      
}