package com.example.Sem3.Repository;

import com.example.Sem3.Model.Cart;
import com.example.Sem3.Model.Users;
import com.example.Sem3.Response.ProductinCartReponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CartReponsitory extends JpaRepository<Cart,Integer > {
    @Query("SELECT  new com.example.Sem3.Response.ProductinCartReponse(c.cart_id ,c.product, c.quantity) FROM Cart c WHERE c.users = :userId")
    List<ProductinCartReponse> getProductinCart(@Param("userId") Users user);

}
