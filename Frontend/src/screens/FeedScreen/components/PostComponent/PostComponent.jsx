import React, { useState } from "react";
import FoldableParagraph from "../FoldableParagraph/FoldableParagraph";
import { Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import formatDate from "../../../../util/formatDate";
import PROFILE_IMAGE from "../../../../assets/images/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import SubMenuForPosts from "../SubMenuForPosts/SubMenuForPosts";

import axios from "axios";
import CommentCard from "../CommentCard/CommentCard";
import CommentInputField from "../CommentInputField/CommentInputField";

function PostComponent({ data }) {
  const [post, setPost] = useState(data);
  const onPostSubmit = () => {};
  const handleLikeClick = () => {
    const likeCount = post.likes + 1;

    axios
      .put(`http://localhost:8080/api/post/${post.id}/like/${likeCount}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const samplePost = {
    userPicturePath: "https://pixabay.com/images/id-1911637/",
    userName: "John Doe",
    picturepath: "https://pixabay.com/images/id-1911637/",
    likes: 10,
    createdAt: "2022-05-13T10:30:00.000Z",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum eget ex commodo malesuada.",
  };

  return (
    <div
      style={{ width: "600px" }}
      className="row flex-column align-items-center mb-5 mt-5"
    >
      {" "}
      <div className="d-flex mb-2 align-items-center justify-content-between">
        <section className="d-flex align-items-center  ">
          <Avatar src={PROFILE_IMAGE} className="custom-avatar mx-2" />
          <span>
            <em>
              <b>{samplePost.userName}</b>
            </em>
          </span>
        </section>

        <SubMenuForPosts />
      </div>
      <img
        src={PROFILE_IMAGE} //TODO:: replace woth real image urls
        alt="Image placeholder"
      />
      <div className="row flex-row justify-content-between mt-2 mb-2">
        <span className="w-25">
          <FavoriteIcon
            onClick={() => {
              handleLikeClick();
            }}
            sx={{ color: "#ff3841" }}
          />
          {post.likes}
        </span>
        <span className="w-25">
          <em>
            <b>{samplePost.userName}</b>
          </em>
        </span>
        <span className="w-25">{formatDate(post.createdAt)}</span>
      </div>
      <FoldableParagraph description={post.description} />
      <hr />
      <h4>Comments</h4>
      <hr />
      {data.comments.map((comment) => {
        return <CommentCard data={comment} />;
      })}
      <CommentInputField onSubmit={onPostSubmit} />
    </div>
  );
}

export default PostComponent;
