import { Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function CommentCard({ data }) {
  return (
    <div className="mb-3 d-flex justify-content-between w-100">
      <div className="d-flex gap-3 ">
        <span style={{ fontWeight: "bold" }}>{data.authorId}</span>
        <Typography>{data.comment}</Typography>
      </div>
      <DeleteIcon color="error" />
    </div>
  );
}

export default CommentCard;
