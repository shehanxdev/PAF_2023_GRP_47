package com.API.foodiesAPI.repositories;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.API.foodiesAPI.models.Comment;
// import org.springframework.data.cassandra.repository.AllowFiltering;
// import org.springframework.data.cassandra.repository.CassandraRepository;

// import com.example.facebookapi.Entity.Comment;

public interface CommentRepository extends MongoRepository<Comment,String>  {

    // Comment save(Comment comment);
    
    // @AllowFiltering
    // ArrayList<Comment> findAllByPostID(UUID postID);
    
}
