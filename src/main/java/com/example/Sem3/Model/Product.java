package com.example.Sem3.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.example.Sem3.Model.Category;
import java.math.BigDecimal;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int product_id;
    @Column(columnDefinition = "NVARCHAR(MAX)")
    private String product_name;
    private String product_image;
    private BigDecimal price;
    @Column(columnDefinition = "NVARCHAR(MAX)")
    private String description;
    private int quantity;
    @Column(columnDefinition = "NVARCHAR(MAX)")
    private String brand;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    // Constructors


}
