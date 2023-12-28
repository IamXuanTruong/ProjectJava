package com.example.Sem3.Services;


import com.example.Sem3.Model.Users;
import com.example.Sem3.Request.LoginRequest;
import com.example.Sem3.Request.RegistrationRequest;
import com.example.Sem3.Response.LoginReponse;
import com.example.Sem3.Response.UserReponse;
import jakarta.mail.MessagingException;

import java.io.IOException;
import java.util.Optional;

public interface IUserService {
    void registerUser(RegistrationRequest request) throws MessagingException, IOException;
    void updateIsEnabled(String activeKey);
    LoginReponse Login(LoginRequest loginRequest);
    UserReponse GetProfileUser(String email);

    void sendEmail(Users newUser, String token);

    Optional<Users> findByEmail(String email);

    String generateActiveKey();


    boolean validActiveKey(String activeKey);

    boolean oldPasswordIsValid(Users users, String oldPassword);

    void createPasswordResetTokenForUser(Users users, String resetPasswordToken);
}
