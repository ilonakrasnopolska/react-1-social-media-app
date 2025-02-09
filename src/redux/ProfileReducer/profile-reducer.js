import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import avatars from "../../assets/Avatars-src";
import {pictures} from "../../assets/Pictures-src";

import {
  addPostHelper, deletePostHelper,
  updateNewPostTextHelper, handleLikeHelper, toggleCommentsHelper, updateProfileInfoHelper
} from "./ProfileHelpers/post-helpers";
import {
  updateNewCommentTextHelper, replyOnCommentHelper,
  addCommentHelper, deleteCommentHelper
} from "./ProfileHelpers/comment-helpers";

const CURRENT_USER_NAME = "Ilona Sue"

const initialState = {
  posts: [
    {
      name: CURRENT_USER_NAME, postId: uuidv4(), message: 'Who is your favourite character in Naruto?',
      comments: 1, likes: 123, time: '10:00', likedByUser: false, avatar: avatars.ilonaSue,
      commentData: {
        commentsVisibility: false, messages:
          [{
            commentId: uuidv4(),
            message: 'Wow!Amazing!',
            user: 'Mark',
            time: '13:00',
            avatar: `${avatars.markPic}`
          }],
      }, newCommentText: '',
    },
    {
      name: CURRENT_USER_NAME, postId: uuidv4(), message: 'Where are you from',
      comments: 1, likes: 14, time: '09:00', likedByUser: false, avatar: avatars.ilonaSue,
      commentData: {
        commentsVisibility: false, messages:
          [{
            commentId: uuidv4(),
            message: 'Nice!',
            user: 'Vikky',
            time: '13:30',
            avatar: `${avatars.vikkyPic}`
          }],
      }, newCommentText: '',
    },
    {
      name: CURRENT_USER_NAME, postId: uuidv4(), message: 'I wish i had more free time to watch anime!',
      comments: 1, likes: 36, time: '08:00', likedByUser: false, avatar: avatars.ilonaSue,
      commentData:  {
        commentsVisibility: false, messages:
          [{
            commentId: uuidv4(),
            message: 'Amazing!',
            user: 'Sunny',
            time: '14:30',
            avatar: `${avatars.sunnyPic}`
          }],
      }, newCommentText: '',
    },
    {
      name: CURRENT_USER_NAME, postId: uuidv4(), message: 'Have you seen the JK?',
      comments: 1, likes: 13, time: '07:00', likedByUser: false, avatar: avatars.ilonaSue,
      commentData: {
        commentsVisibility: false, messages:
          [{
            commentId: uuidv4(),
            message: 'Great!',
            user: 'Ino',
            time: '16:30',
            avatar: `${avatars.inoPic}`
          }],
      }, newCommentText: '',
    },
    {
      name: CURRENT_USER_NAME, postId: uuidv4(), message: 'Hello everyone!',
      comments: 1, likes: 3, time: '06:00', likedByUser: false, avatar: avatars.ilonaSue,
      commentData:  {
        commentsVisibility: false, messages:
          [{
            commentId: uuidv4(),
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
      favoriteAnime: 'Naruto'
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
