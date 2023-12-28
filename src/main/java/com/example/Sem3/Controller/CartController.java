package com.example.Sem3.Controller;

import com.example.Sem3.Repository.CartReponsitory;
import com.example.Sem3.Request.CartRequest;
import com.example.Sem3.Response.ProductinCartReponse;
import com.example.Sem3.Services.CartService;
import com.example.Sem3.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("auth/api/cart")
public class CartController {
    private final CartService cartService;
    private final CartReponsitory cartReponsitory;
    private final UserService userService;
    @PostMapping
    public ResponseEntity<String> addProducttoCart(@RequestBody CartRequest request){
        cartService.addProduct(request);
        return ResponseEntity.ok().body("ok");
    }
    @GetMapping
    public ResponseEntity<List<ProductinCartReponse>> getProductinCart(){
        List<ProductinCartReponse> cartItems = cartReponsitory.getProductinCart(userService.getUserLogining());
        return ResponseEntity.ok().body(cartItems);
    }
    @DeleteMapping("/delete/{id}")
    public String DeleteProductCart(@PathVariable int cart_id){
        if (cartReponsitory.existsById(cart_id)){
            cartReponsitory.deleteById(cart_id);
            return "ok";
        }else {
            return "delete err";
        }
    }
    @PutMapping("/updatecart")
    public ResponseEntity<String> updateProductinCart(@RequestParam("cartId") int cartId ,@RequestBody CartRequest request){
        cartService.update(cartId,request.getQuantity());
        return ResponseEntity.ok().body("ok");
    }

}
