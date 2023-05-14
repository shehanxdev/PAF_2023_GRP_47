import React, { useEffect, useState } from "react";
import PostComponent from "./components/PostComponent/PostComponent";
import SideNavbar from "../../components/SideNavBar/SideNavbar";

import WavingHandIcon from "@mui/icons-material/WavingHand";
import { CircularProgress, Divider } from "@mui/material";

import axios from "axios";
import CreatePostModal from "./components/CreatePostModal/CreatePostModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAsync } from "../../store/slices/postSlice.js";

function FeedScreen() {
  // const [posts, setPosts] = useState([]);
  // const [createModalOpen, setCreateModalOpen] = useState(false);
  const posts = useSelector((state) => state.post.posts[0]);

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      // axios
      //   .get("http://localhost:8080/api/post/")
      //   .then((response) => {
      //     setPosts(response.data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      dispatch(fetchPostsAsync());
    }
    fetchData();
  }, []);

  return (
    <div className="d-flex">
      <SideNavbar />
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <h1 className="mt-5">Welcome User</h1>
        <WavingHandIcon className="mb-5" sx={{ fontSize: 30 }} />
        {/* //TODO::Replace user with dynamic values */}
        {posts.map((post) => {
          return (
            <>
              <PostComponent data={post} />
              <Divider />
            </>
          );
        })}
      </div>
      <CreatePostModal open={false} />
    </div>
  );
}

export default FeedScreen;
