package com.API.foodiesAPI.services;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.API.foodiesAPI.models.Comment;
import com.API.foodiesAPI.repositories.CommentRepository;

@Service

public class CommentService {
    @Autowired
	CommentRepository commentRepo;
	
	// @Autowired
	// UserService userService;
	
	public Comment saveComment(Comment comment) {
		Date date=new Date();
		long time=date.getTime();
		Timestamp dateTime=new Timestamp(time);
		
		//comment.setCommentID(UUID.randomUUID());
		comment.setTimeStamp(dateTime);
		return commentRepo.save(comment);
	}
	
	public Optional<Comment> getAllComment(String postID){
		Optional<Comment> result;
		result=commentRepo.findById(postID);
		return result;
	}
}
