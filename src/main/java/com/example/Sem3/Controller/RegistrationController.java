package com.example.Sem3.Controller;

import com.example.Sem3.Exception.UserAlreadyExistsException;
import com.example.Sem3.Model.Users;
import com.example.Sem3.Request.LoginRequest;
import com.example.Sem3.Request.PasswordRequestUtil;
import com.example.Sem3.Request.RegistrationRequest;
import com.example.Sem3.Response.LoginReponse;
import com.example.Sem3.Services.UserService;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {
    private final UserService userService;
    @GetMapping("/register/profile")
    public ResponseEntity<List<Users>> getprofile(){
        List<Users> users = userService.getprofile();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegistrationRequest registrationRequest) throws MessagingException, IOException {
        try {
            userService.registerUser(registrationRequest);
            return ResponseEntity.ok("Please check your email to active account");
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with email " + registrationRequest.email() + " already exists");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginReponse> Login(@RequestBody LoginRequest loginRequest) {
        Users user = userService.findByEmail(loginRequest.email()).orElseThrow();
        if(!user.isEnabled()){
            return ResponseEntity.badRequest().body(new LoginReponse(""));

        }
        return ResponseEntity.ok(userService.Login(loginRequest));
    }
    @GetMapping("/verify")
    public ResponseEntity<String> verifyEmail(@RequestParam("activeKey") String activeKey){
        if(userService.validActiveKey(activeKey)){
            userService.updateIsEnabled(activeKey);
            return ResponseEntity.ok("Verify successfully");
        }
        return ResponseEntity.badRequest().body("The Verify time has expired, please click resend email\n");

    }

    @PostMapping("/resend-verify")
    public ResponseEntity<String> ResendverifyEmail(@RequestParam("email") String email){
        userService.ResendEmailVerify(email);
        return ResponseEntity.ok("Please check your email to active account");
    }


    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword(@RequestBody PasswordRequestUtil requestUtil){
        Users user = userService.findByEmail(requestUtil.getEmail()).get();
        if (!userService.oldPasswordIsValid(user, requestUtil.getOldPassword())){
            return ResponseEntity.ok("Incorrect old password");
        }
        userService.changePassword(user, requestUtil.getNewPassword());
        return ResponseEntity.ok("Password changed successfully");
    }

    @PostMapping("/reset-password-request")
    public ResponseEntity<String> ResetPasswordRequest(@RequestBody PasswordRequestUtil requestUtil, final HttpServletRequest servletRequest) throws MessagingException, UnsupportedEncodingException {
        Optional<Users> user = userService.findByEmail(requestUtil.getEmail());
        if(user.isPresent()){
            String resetPasswordToken = UUID.randomUUID().toString();
            userService.createPasswordResetTokenForUser(user.get(),resetPasswordToken);
            userService.sendEmail(user.get(),resetPasswordToken);
            return ResponseEntity.ok("Please check your email to reset your password!");

        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This account does not exist");

        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> ResetPasswordRequest(@RequestBody PasswordRequestUtil requestUtil, @RequestParam("token") String token){
        String validateToken = userService.validatePasswordResetToken(token);
        if(!validateToken.equalsIgnoreCase("valid")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid token password reset token");
        }
        Users user = userService.findUserByResetPasswordToken(token).get();
        userService.changePassword(user,requestUtil.getNewPassword());
        return ResponseEntity.ok("Successfully");
    }
}
