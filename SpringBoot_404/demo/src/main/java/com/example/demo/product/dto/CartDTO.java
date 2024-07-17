package com.example.demo.product.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartDTO {

    private Long cart_id;
    private String user_id;
    private Long product_id;
    private int quantity;

}
