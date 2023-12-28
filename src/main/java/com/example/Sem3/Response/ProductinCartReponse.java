package com.example.Sem3.Response;

import com.example.Sem3.Model.Product;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ProductinCartReponse {
    private long Id;
    private Product product;
    private int quantity;
}