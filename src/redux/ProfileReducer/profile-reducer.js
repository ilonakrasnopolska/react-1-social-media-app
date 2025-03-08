import { createSlice } from "@reduxjs/toolkit";
import { pictures } from "../../assets/Pictures-src";

import {
  setPostsListHelper,
  setProfileDataHelper,
  addPostHelper,
  deletePostHelper,
  updateNewPostTextHelper,
  handleLikeHelper,
  toggleCommentsHelper,
  updateProfileInfoHelper,
} from "./ProfileHelpers/post-helpers";
import {
  updateNewCommentTextHelper,
  replyOnCommentHelper,
  addCommentHelper,
  deleteCommentHelper,
} from "./ProfileHelpers/comment-helpers";

const initialState = {
  posts: [],
  personalAccount: { userData: {} },
  profileCover: `${pictures.Cover}`,
  newPostText: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setPostsList: (state, action) => {
      setPostsListHelper(state, action);
    },
    setProfileData: (state, action) => {
      setProfileDataHelper(state, action);
    },
    addPost: (state) => {
      addPostHelper(state);
    },
    deletePost: (state, action) => {
      deletePostHelper(state, action);
    },
    updateNewPostText: (state, action) => {
      updateNewPostTextHelper(state, action);
    },
    handleLike: (state, action) => {
      handleLikeHelper(state, action);
    },
    toggleComments: (state, action) => {
      toggleCommentsHelper(state, action);
    },
    updateNewCommentText: (state, action) => {
      updateNewCommentTextHelper(state, action);
    },
    replyOnComment: (state, action) => {
      replyOnCommentHelper(state, action);
    },
    addComment: (state, action) => {
      addCommentHelper(state, action);
    },
    deleteComment: (state, action) => {
      deleteCommentHelper(state, action);
    },
    updateProfileInfo: (state, action) => {
      updateProfileInfoHelper(state, action);
    },
  },
});

export const {
  setPostsList,
  setProfileData,
  addPost,
  deletePost,
  updateNewPostText,
  handleLike,
  toggleComments,
  updateNewCommentText,
  replyOnComment,
  addComment,
  deleteComment,
  updateProfileInfo,
} = profileSlice.actions;

export default profileSlice.reducer;
