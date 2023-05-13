package com.API.foodiesAPI.models;

import java.util.Date;

public class Comment {
    private String id;
    private String authorId;
    private String comment;
    private Date timeStamp;

    public Comment( String authorId, String comment, Date timeStamp) {
        this.authorId = authorId;
        this.comment = comment;
        this.timeStamp = timeStamp;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAuthorId() {
        return authorId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Date timeStamp) {
        this.timeStamp = timeStamp;
    }
}