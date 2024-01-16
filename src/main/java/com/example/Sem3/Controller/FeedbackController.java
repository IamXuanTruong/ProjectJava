package com.example.Sem3.Controller;

import com.example.Sem3.Model.Feedback;
import com.example.Sem3.Model.Users;
import com.example.Sem3.Repository.FeedbackRepository;
import com.example.Sem3.Request.FeedbackRequest;
import com.example.Sem3.Services.FeedbackService;
import com.example.Sem3.Services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("auth/api/feedback")
@AllArgsConstructor
public class FeedbackController {
    private final FeedbackRepository feedbackRepository;
    private final FeedbackService feedbackService;
    private final UserService userService;
    @GetMapping
    public ResponseEntity<List<Feedback>>getAllFeedBack(){
        List<Feedback> feedbacks = feedbackService.getAllFeedBack();
        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<String> createFeedback(@RequestBody FeedbackRequest feedbackRequest) {
        List<Users> users = userService.getprofile();
        Feedback createFeedback = feedbackService.createfeedback(feedbackRequest);
        String message = "Feedback post successfully " + createFeedback.getFeedback_id();
        return ResponseEntity.ok().body(message);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteFeedback(@PathVariable int id){
        if(feedbackRepository.existsById(id)){
            feedbackRepository.deleteById(id);
            return  ResponseEntity.ok("ok");
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("k the xoa");
        }
    }
}
