import {createSlice} from '@reduxjs/toolkit';
import avatars from "../Assets/Avatars-src";
import {pictures} from "../Assets/Pictures-src";

import {
  addPostHelper, deletePostHelper,
  updateNewPostTextHelper, handleLikeHelper, toggleCommentsHelper, updateProfileInfoHelper
} from "./ProfileHelpers/post-helpers";
import {
  updateNewCommentTextHelper, replyOnCommentHelper,
  addCommentHelper, deleteCommentHelper
} from "./ProfileHelpers/comment-helpers";

const CURRENT_USER_NAME = "Ilona Sue"
let postIdCounter = 1;
let commentIdCounter = 1;

const initialState = {
  posts: [
    {
      name: CURRENT_USER_NAME, postId: postIdCounter++, message: 'Who is your favourite character in Naruto?',
      comments: 1, likes: 123, time: '10:00', likedByUser: false, commentData: {
        commentsVisibility: false, messages:
          [{
            commentId: commentIdCounter++,
            message: 'Wow!Amazing!',
            user: 'Mark',
            time: '13:00',
            avatar: `${avatars.markPic}`
          }],
      }, newCommentText: '',

    },
    {
      name: CURRENT_USER_NAME, postId: postIdCounter++, message: 'Where are you from',
      comments: 1, likes: 14, time: '09:00', likedByUser: false, commentData: {
        commentsVisibility: false, messages:
          [{
            commentId: commentIdCounter++,
            message: 'Nice!',
            user: 'Vikky',
            time: '13:30',
            avatar: `${avatars.vikkyPic}`
          }],
      }, newCommentText: '',
    },
    {
      name: CURRENT_USER_NAME, postId: postIdCounter++, message: 'I wish i had more free time to watch anime!',
      comments: 1, likes: 36, time: '08:00', likedByUser: false, commentData:  {
        commentsVisibility: false, messages:
          [{
            commentId: commentIdCounter++,
            message: 'Amazing!',
            user: 'Sunny',
            time: '14:30',
            avatar: `${avatars.sunnyPic}`
          }],
      }, newCommentText: '',
    },
    {
      name: CURRENT_USER_NAME, postId: postIdCounter++, message: 'Have you seen the JK?',
      comments: 1, likes: 13, time: '07:00', likedByUser: false, commentData: {
        commentsVisibility: false, messages:
          [{
            commentId: commentIdCounter++,
            message: 'Great!',
            user: 'Ino',
            time: '16:30',
            avatar: `${avatars.inoPic}`
          }],
      }, newCommentText: '',
    },
    {
      name: CURRENT_USER_NAME, postId: postIdCounter++, message: 'Hello everyone!',
      comments: 1, likes: 3, time: '06:00', likedByUser: false, commentData:  {
        commentsVisibility: false, messages:
          [{
            commentId: commentIdCounter++,
            message: 'Hi!',
            user: 'Sakura',
            time: '17:30',
            avatar: `${avatars.sakuraPic}`
          }],
      }, newCommentText: '',
    },
  ],
  personalAccount: {
    userData: {
      avatar: avatars.ilonaSue,
      name: 'Ilona Sue',
      dateOfBirth: '1999-07-09',
      city: 'Haifa',
      gender: 'Female',
      favAnime: 'Naruto'
    }
  },
  profileCover: `${pictures.Cover}`,
  newPostText: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost: (state) => {
      addPostHelper(state)
    },
    deletePost: (state, action) => {
      deletePostHelper(state, action);
    },
    updateNewPostText: (state, action) => {
      updateNewPostTextHelper(state, action);
    },
    handleLike: (state, action) => {
      handleLikeHelper(state, action)
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
    }
  },
});

export const {
  addPost, deletePost,
  updateNewPostText, handleLike, toggleComments,
  updateNewCommentText, replyOnComment,
  addComment, deleteComment,
  updateProfileInfo
} = profileSlice.actions;

export default profileSlice.reducer;
