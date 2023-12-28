package com.example.Sem3.Services;

import com.example.Sem3.Model.Category;
import com.example.Sem3.Repository.CategoryRepository;
import com.example.Sem3.Request.CategoryRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;
    @Autowired
    public CategoryService(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }
    public Category createCategory(CategoryRequest categoryRequest){
        Category c= new Category();
        c.setCategory_name(categoryRequest.getCategoryName());
        return categoryRepository.save(c);
    }
    public Optional<Category> getCategoryById(int categoryId) {
        return categoryRepository.findById(categoryId);
    }
    public void deleteCategory(int categoryId) {
        categoryRepository.deleteById(categoryId);
    }




}
