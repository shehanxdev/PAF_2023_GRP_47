import { useState } from "react";
import { TextField, Button } from "@mui/material";

function CommentInputField({ onSubmit }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(comment);
    setComment("");
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="comment"
        label="Add a comment"
        variant="outlined"
        size="small"
        value={comment}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" type="submit" disableElevation>
        Comment
      </Button>
    </form>
  );
}

export default CommentInputField;
