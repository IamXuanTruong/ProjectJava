package com.example.Sem3.Controller;

import com.example.Sem3.Model.Category;
import com.example.Sem3.Model.Product;
import com.example.Sem3.Repository.CategoryRepository;
import com.example.Sem3.Repository.ProductRepository;
import com.example.Sem3.Request.ProductRequest;
import com.example.Sem3.Services.CategoryService;
import com.example.Sem3.Services.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@AllArgsConstructor

public class ProductController {
    private final ProductService productService;
    private final ProductRepository productRepository;
    private final CategoryService categoryService;
    private final CategoryRepository categoryRepository;
    @GetMapping
    public ResponseEntity<List<Product>> getAllProduct(){
        List<Product> products = productService.getAllProduct();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<String> createProduct(@RequestBody ProductRequest request) {
        List<Category> categories = categoryService.getAllCategories();
        System.out.println("Received request: " + request.getProductName());
        System.out.println("Price: " + request.getPrice());
        System.out.println("Description: " + request.getDescription());
        System.out.println("Quantity: " + request.getQuantity());
        System.out.println("Category: " + request.getCategory());
        System.out.println("Brand: " + request.getBrand());
        // Call the service to create the product
        Product createdProduct = productService.createProduct(request);

        // Use the created product information for the response
        String responseMessage = "Product created successfully. Product ID: " + createdProduct.getProduct_id();

        return ResponseEntity.ok().body(responseMessage);
    }

    @GetMapping("/detail/{id}")
    public Product getProductById(@PathVariable int id){
        return productRepository.findById(id).orElse(null);
    }
        @PutMapping("/update/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable int id,
            @RequestBody ProductRequest request
    ){
        Product exProduct= productRepository.findById(id).orElseThrow(()->new IllegalArgumentException("product not fault"));
        exProduct.setProduct_name(request.getProductName());
        exProduct.setProduct_image(request.getProductImage());
        exProduct.setPrice(request.getPrice());
        exProduct.setDescription(request.getDescription());
        exProduct.setQuantity(request.getQuantity());
        exProduct.setBrand(request.getBrand());
        exProduct.setCategory(categoryRepository.findById(request.getCategory()).orElseThrow());
        Product updateProduct = productRepository.save(exProduct);
        return ResponseEntity.ok(updateProduct);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id){
        if (productRepository.existsById(id)){
            productRepository.deleteById(id);
            return ResponseEntity.ok("ok");
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("loi roi");
        }
    }

}
