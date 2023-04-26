package com.API.foodiesAPI.controllers;

import com.API.foodiesAPI.models.Post;
import com.API.foodiesAPI.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    private PostService postservice;

    @PostMapping("/")
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
     try{
         Post newPost=postservice.createPost(post);
         return ResponseEntity.ok(newPost);
     }
     catch (Exception exception){
         System.out.println("Database operation failed "+exception);
         return ResponseEntity
                 .status(HttpStatus.INTERNAL_SERVER_ERROR)
                 .body(null);
     }
    }

    @GetMapping("/")
    public ResponseEntity<List<Map<String,Object>>> getAllPosts() {
     try{
        List<Post> posts = postservice.getAllPosts();
        List<Map<String, Object>> response = posts.stream().map(post -> {
            Map<String, Object> postMap = new HashMap<>();
            postMap.put("id", post.getId().toString());
            postMap.put("images", post.getImages());
            postMap.put("description", post.getDescription());
            postMap.put("authorId", post.getAuthorId());
            postMap.put("date", post.getDate());
            postMap.put("comments", post.getComments());
            postMap.put("likes", post.getLikes());
            return postMap;
        }).collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }catch (Exception exception){
        System.out.println("Database operation failed "+exception);
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null);
    }
    }


    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable String id) {
        try{
            Post post = postservice.getPostById(id);
            if (post != null) {
                return ResponseEntity.ok(post);
            } else {
                return ResponseEntity.notFound().build();
            }
        }
        catch (Exception exception){
            System.out.println("Database operation failed "+exception);
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    @PutMapping("/{id}/like/{likeCount}")
    public ResponseEntity<Post> updatePostLikes(@PathVariable String id, @PathVariable int likeCount) {
        try {
            Post post = postservice.updatePostLikes(id, likeCount);
            if (post == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(post);
        } catch (Exception exception) {
            System.out.println("Database operation failed "+exception);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }



    @PutMapping("/{id}")
    public ResponseEntity<?> updatePost(@PathVariable String id, @RequestBody Post post) {
        try {
            post.setId(id);
            Post updatedPost = postservice.updatePost(post);
            return ResponseEntity.ok(updatedPost);
        } catch (Exception exception) {
            System.out.println("Database operation failed "+exception);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @CrossOrigin(origins = "http://localhost:8000")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable(value = "id") String Id) {
        try {
            postservice.deletePost(Id);
            return ResponseEntity.ok().build();
        } catch (Exception exception) {
            System.out.println("Database operation failed "+exception);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
 
    
}
