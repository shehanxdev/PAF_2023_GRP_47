import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
const API_URL = "http://localhost:8080/api/post/";
export const postSlice = createSlice({
  name: "post",
  initialState: {
    //TODO:: add loading state
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const postIndex = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      state.posts[postIndex] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostsAsync.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
  },
});

export const { addPost, removePost, updatePost } = postSlice.actions;

export default postSlice.reducer;

export const fetchPostsAsync = createAsyncThunk(
  "posts/fetchAllPosts",
  async (thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
