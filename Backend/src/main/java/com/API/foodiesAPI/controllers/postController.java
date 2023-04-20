package com.API.foodiesAPI.controllers;

import com.API.foodiesAPI.models.Post;
import com.API.foodiesAPI.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/post")
public class postController {

    @Autowired
    private PostService postservice;


    @CrossOrigin(origins = "http://localhost:8000")
    @PostMapping("/")
    public ResponseEntity<?> createPost(@RequestBody Post post) {
        postservice.createPost(post);
        return ResponseEntity.ok("Post Added");
    }
    @CrossOrigin(origins = "http://localhost:8000")
    @GetMapping("/")
    public ResponseEntity<List<Map<String, Object>>> getAllPosts() {
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
    }

    @CrossOrigin(origins = "http://localhost:8000")
    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable String id) {
        Post post = postservice.getPostById(id);
        if (post != null) {
            return ResponseEntity.ok(post);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}/like/{likeCount}")
    public ResponseEntity<Post> updatePostLikes(@PathVariable String id, @PathVariable int likeCount) {
        Post post = postservice.updatePostLikes(id, likeCount);
        if (post == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(post);
    }

    //TODO refactor how data is passed(above practice is recommended)
    @CrossOrigin(origins = "http://localhost:8000")
    @PutMapping("/{id}")
    public ResponseEntity<?> updatePost(@PathVariable String id, @RequestBody Post post) {

   post.setId(id);
   postservice.updatePost(post);
        return ResponseEntity.ok().build();
    }
    @CrossOrigin(origins = "http://localhost:8000")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable(value = "id") String Id) {
        try {
            postservice.deletePost(Id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
 
    
}
