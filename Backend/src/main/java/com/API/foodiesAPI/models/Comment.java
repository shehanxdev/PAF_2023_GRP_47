package com.API.foodiesAPI.models;

public class Comment {
    private String authorId;
    private String comment;

    public Comment(String authorId, String comment) {
        this.authorId = authorId;
        this.comment = comment;
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
}
