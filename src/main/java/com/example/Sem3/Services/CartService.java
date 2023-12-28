package com.example.Sem3.Services;

import com.example.Sem3.Model.Cart;
import com.example.Sem3.Model.Category;
import com.example.Sem3.Model.Product;
import com.example.Sem3.Model.Users;
import com.example.Sem3.Repository.CartReponsitory;
import com.example.Sem3.Repository.CategoryRepository;
import com.example.Sem3.Request.CartRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartReponsitory cartReponsitory;
    private final UserService userService;
    private final ProductService productService;
    public void addProduct(CartRequest request){
        Users users = userService.getUserLogining();
        Product product = productService.getProductById(request.getProductId()).get();
        Cart cart = new Cart();
        cart.setUsers(users);
        cart.setProduct(product);
        cart.setQuantity(request.getQuantity());
        cartReponsitory.save(cart);
    }
    public void delete(int cart_id){
        Cart cart = cartReponsitory.findById(cart_id).orElseThrow();
        cartReponsitory.deleteById(cart_id);
    }
    public void update(int cart_id,int quantity){
        Cart cart = cartReponsitory.findById(cart_id).orElseThrow();
        cart.setQuantity(quantity);
        cartReponsitory.save(cart);
    }
    public List<Cart> deleteAll(){
        List<Cart> deletedItems = new ArrayList<>(cartReponsitory.findAll());
        cartReponsitory.deleteAll();
        return deletedItems;
    }
}
