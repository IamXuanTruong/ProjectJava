package com.example.Sem3.Response;

import com.example.Sem3.common.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class UserReponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Role role;
    private String address;
    private String phoneNumber;


}
