package com.API.foodiesAPI.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class likeController {

    @GetMapping("/health")
    public ResponseEntity<?> healthCheck(){
        return  ResponseEntity.ok("Health Check Successfull");
    }
}