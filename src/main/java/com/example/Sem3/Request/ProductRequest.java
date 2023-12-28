package com.example.Sem3.Request;

import com.example.Sem3.Model.Category;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
@Data
@Setter
@Getter
public class ProductRequest {
    private String productName;
    private String productImage;
    private BigDecimal Price;
    private String Description;
    private int Quantity;
    private int category;
    private String brand;
}
