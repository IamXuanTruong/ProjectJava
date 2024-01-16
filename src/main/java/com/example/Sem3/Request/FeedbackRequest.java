package com.example.Sem3.Request;

import com.example.Sem3.Model.Feedback;
import lombok.Data;

@Data
public class FeedbackRequest {
    private long users;
    private String description;


}
