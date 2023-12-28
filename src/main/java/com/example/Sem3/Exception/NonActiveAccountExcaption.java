package com.example.Sem3.Exception;

public class NonActiveAccountExcaption extends RuntimeException {
    public NonActiveAccountExcaption(String message) {
        super(message);
    }
}
