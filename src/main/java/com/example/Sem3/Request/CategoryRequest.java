package com.example.Sem3.Request;

import lombok.Data;

@Data
public class CategoryRequest {
    private String categoryName;
    public String getCategoryName() {
        return categoryName;
    }
    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}
