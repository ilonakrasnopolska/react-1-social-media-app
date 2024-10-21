import {createSlice} from '@reduxjs/toolkit';
import avatars from "../Avatars-src";
import {
  addPostHelper, deletePostHelper,
  updateNewPostTextHelper, handleLikeHelper, toggleCommentsHelper
} from "./ProfileHelpers/post-helpers";
import {
  updateNewCommentTextHelper, replyOnCommentHelper,
  addCommentHelper, deleteCommentHelper
} from "./ProfileHelpers/comment-helpers";

let postIdCounter = 1;
let commentIdCounter = 1;

const initialState = {
  posts: [
    {
      name: "Ilona Sue", postId: postIdCounter++, message: 'Who is your favourite character in Naruto?',
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
    // Остальные посты
  ],
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
  },
});

export const {
  addPost, deletePost,
  updateNewPostText, handleLike, toggleComments,
  updateNewCommentText, replyOnComment,
  addComment, deleteComment
} = profileSlice.actions;

export default profileSlice.reducer;
