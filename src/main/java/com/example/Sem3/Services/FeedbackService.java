package com.example.Sem3.Services;

import com.example.Sem3.Model.Feedback;
import com.example.Sem3.Model.Users;
import com.example.Sem3.Repository.FeedbackRepository;
import com.example.Sem3.Repository.UsersRepository;
import com.example.Sem3.Request.FeedbackRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FeedbackService {
    private final FeedbackRepository feedbackRepository;
    private final UserService userService;
    public List<Feedback> getAllFeedBack(){
        return feedbackRepository.findAll();
    }
    public Feedback createfeedback(FeedbackRequest feedbackRequest) {
        Users users = userService.getUserLogining();
        Feedback f = new Feedback();
        f.setDescription(feedbackRequest.getDescription());
        f.setUsers(users);
        return feedbackRepository.save(f);
    }
    public void deleteFeedback(int feedback_id){
        feedbackRepository.deleteById(feedback_id);
    }

}
