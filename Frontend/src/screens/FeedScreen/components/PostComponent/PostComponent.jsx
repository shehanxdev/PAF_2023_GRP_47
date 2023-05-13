import React from "react";
import FoldableParagraph from "../FoldableParagraph/FoldableParagraph";
import { Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import formatDate from "../../../../util/formatDate";
function PostComponent() {
  const post = {
    userPicturePath: "https://pixabay.com/images/id-1911637/",
    userName: "John Doe",
    picturepath: "https://pixabay.com/images/id-1911637/",
    likes: 10,
    createdAt: "2022-05-13T10:30:00.000Z",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum eget ex commodo malesuada.",
  };

  return (
    <div className="row flex-column align-items-center mb-5 mt-5 custom-post-card ">
      {" "}
      <span>{`Post No 1
    `}</span>
      <div className="d-flex mb-2 align-items-center justify-content-between">
        <section className="d-flex align-items-center  ">
          <Avatar src={post.userPicturePath} className="custom-avatar mx-2" />
          <span>
            <em>
              <b>{post.userName}</b>
            </em>
          </span>
        </section>

        {/* <SubMenuForPosts /> */}
      </div>
      <img
        className="custom-post-img"
        src={post.picturepath}
        alt="Image placeholder"
      />
      <div className="row flex-row justify-content-between mt-2 mb-2">
        <span className="w-25">
          <FavoriteIcon sx={{ color: "#ff3841" }} />
          {post.likes}
        </span>
        <span className="w-25">
          <em>
            <b>{post.userName}</b>
          </em>
        </span>
        <span className="w-25">{formatDate(post.createdAt)}</span>
      </div>
      <FoldableParagraph description={post.description} />
      <hr />
    </div>
  );
}

export default PostComponent;
