package com.API.foodiesAPI.service;
import com.API.foodiesAPI.models.Post;
import com.API.foodiesAPI.repository.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PostService {
    @Autowired
    private PostRepository postrepository;

    public List<Post> getAllPosts() {
        return postrepository.findAll();
    }

    public Post getPostById(String id) {
        return postrepository.findById(id).orElse(null);
    }

    public Post createPost(Post post) {
        return postrepository.save(post);
    }

    public Post updatePostLikes(String Id,int likes){
        Post existingPost=postrepository.findById(Id).orElse(null);
        if(existingPost!=null){
            existingPost.setLikes(likes);
            return postrepository.save(existingPost);
        }
        else{
            return null;
        }
    }

    public Post updatePost( Post post) {
        Post existingPost = postrepository.findById(post.getId()).orElse(null);
        
        if (existingPost != null) {
            existingPost.setImages(post.getImages());
            existingPost.setDescription(post.getDescription());
            existingPost.setAuthorId(post.getAuthorId());
            existingPost.setDate(post.getDate());
            existingPost.setComments(post.getComments());
            existingPost.setLikes(post.getLikes());
            return postrepository.save(existingPost);
        }
        return null;
    }

    public void deletePost(String id) {
        postrepository.deleteById(id);
    } 
    
}
