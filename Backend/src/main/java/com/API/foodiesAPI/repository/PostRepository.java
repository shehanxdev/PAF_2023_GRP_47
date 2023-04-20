package com.API.foodiesAPI.repository;

import com.API.foodiesAPI.models.Post;


import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {

}