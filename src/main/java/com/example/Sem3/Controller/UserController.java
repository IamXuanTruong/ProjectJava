package com.example.Sem3.Controller;

import com.example.Sem3.Response.UserReponse;
import com.example.Sem3.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequiredArgsConstructor

@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    @GetMapping()
    public ResponseEntity<UserReponse> GetProfileUser(@RequestParam("email") String email){
        return ResponseEntity.ok(userService.GetProfileUser(email));
    }
}

