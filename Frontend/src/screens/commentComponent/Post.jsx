import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
import Comments from './Comment.jsx';
import SendIcon from '@material-ui/icons/Send';
import "./Post.css";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="post__avatar" src="https://source.unsplash.com/random" alt="User" />
                    </ListItemAvatar>
                    <ListItemText primary="Nadeesha" secondary="1 min ago" />
                </ListItem>
                <img
                    className="post__image"
                    src="https://images.unsplash.com/photo-1609220361638-14ceb45e5e1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                    alt="Post pic"
                />
                <h4 className="post__text"><strong>Username: </strong>Dinushika</h4>
                <div className="post__comments">
                    <Comments />
                </div>
                <form className="post__form">
                    <TextField
                        label="Add comment"
                        size="small"
                        variant="outlined"
                        className="post__input"
                        placeholder="Write a comment"
                    />
                    <Button
                        variant="contained"
                        size="small"
                        endIcon={<SendIcon />}
                    >
                        Send
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Post
