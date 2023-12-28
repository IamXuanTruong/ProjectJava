package com.example.Sem3.Request;

import com.example.Sem3.common.Role;

public record RegistrationRequest (
        String firstName,
        String lastName,
        String email,
        String password,
        Role role,
        String address,
        String phoneNumber) {
}

