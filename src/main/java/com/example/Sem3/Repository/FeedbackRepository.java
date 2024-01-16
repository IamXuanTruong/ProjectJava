package com.example.Sem3.Repository;

import com.example.Sem3.Model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback,Integer> {
}
