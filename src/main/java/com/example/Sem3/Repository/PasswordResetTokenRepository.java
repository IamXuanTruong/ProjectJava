package com.example.Sem3.Repository;

import com.example.Sem3.Model.PasswordResetToken;
import com.example.Sem3.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Long> {
    PasswordResetToken findByToken(String passwordResetToken);
    PasswordResetToken findByUser(Users user);
}
