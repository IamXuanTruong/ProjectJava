package com.example.Sem3.Request;

import lombok.Data;

@Data
public class CartRequest {
    private int productId;
    private int quantity;
}
