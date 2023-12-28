package com.example.Sem3.Services;


import com.example.Sem3.Model.Category;
import com.example.Sem3.Model.Product;
import com.example.Sem3.Repository.CategoryRepository;
import com.example.Sem3.Repository.ProductRepository;
import com.example.Sem3.Request.ProductRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    private  final CategoryService categoryService;

    private final CategoryRepository categoryRepository;
    public List<Product> getAllProduct(){
        return productRepository.findAll();
    }
    public Product createProduct(ProductRequest request) {
        Product p = new Product();
        p.setProduct_name(request.getProductName());
        p.setProduct_image(request.getProductImage());
        p.setPrice(request.getPrice());
        p.setDescription(request.getDescription());
        p.setQuantity(request.getQuantity());
        p.setBrand(request.getBrand());
        p.setCategory(categoryRepository.findById(request.getCategory()).orElseThrow());
        return productRepository.save(p);
    }
    public Optional<Product> getProductById(int product_id){
        return productRepository.findById(product_id);
    }
    public void deleteProduct(int product_id){
        productRepository.deleteById(product_id);
    }
}
