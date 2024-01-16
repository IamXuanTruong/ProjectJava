package com.example.Sem3.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int feedback_id;
    @ManyToOne
    @JoinColumn (name = "id")
    private Users users;
    @Column(columnDefinition = "NVARCHAR(MAX)")
    private String description;
}
