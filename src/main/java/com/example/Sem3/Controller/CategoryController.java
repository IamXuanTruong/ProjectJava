package com.example.Sem3.Controller;

import com.example.Sem3.Model.Category;
import com.example.Sem3.Repository.CategoryRepository;
import com.example.Sem3.Request.CategoryRequest;
import com.example.Sem3.Services.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@AllArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;
    private final CategoryRepository categoryRepository;
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<String> createCategory(@RequestBody CategoryRequest request) {
        System.out.println("Received request: " + request.getCategoryName());
        categoryService.createCategory(request);
        return ResponseEntity.ok().body("+1 category");
    }

    @GetMapping("/detail/{id}")
    public Category getCategoryById(@PathVariable int id) {
        return categoryRepository.findById(id).orElse(null);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Category> updateCategory(
            @PathVariable int id,
            @RequestBody CategoryRequest updateRequest) {

        Category exCategory = categoryRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));
        exCategory.setCategory_name(updateRequest.getCategoryName());
        Category updatedCategory = categoryRepository.save(exCategory);
        return ResponseEntity.ok(updatedCategory);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable int id) {
        if (categoryRepository.existsById(id)) {
            categoryRepository.deleteById(id);
            return ResponseEntity.ok("ok");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("err");
        }
    }
}