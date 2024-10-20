// Константы
import {updateNewPostText, addPost, deletePost, toggleComments, handleLike}
  from "./ProfileHelpers/post-helpers";
import {addComment, deleteComment, replyOnComment, updateNewCommentText}
  from "./ProfileHelpers/comment-helpers"

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const HANDLE_LIKE = "HANDLE-LIKE";
const TOGGLE_COMMENTS = 'TOGGLE-COMMENTS';
const UPDATE_NEW_COMMENT_TEXT = "UPDATE-NEW-COMMENT-TEXT";
const REPLY_ON_COMMENT_TEXT = "REPLY-ON-COMMENT-TEXT";
const ADD_COMMENT = "ADD-COMMENT";
const DELETE_COMMENT = "DELETE-COMMENT";


const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return addPost(state);

    case DELETE_POST:
      return deletePost(state, action);

    case UPDATE_NEW_POST_TEXT:
      return updateNewPostText(state, action);

    case HANDLE_LIKE:
      return handleLike(state, action);

    case TOGGLE_COMMENTS:
      return toggleComments(state, action);

    case UPDATE_NEW_COMMENT_TEXT:
      return updateNewCommentText(state, action);

    case REPLY_ON_COMMENT_TEXT:
      return replyOnComment(state, action);

    case ADD_COMMENT:
      return addComment(state, action);

    case DELETE_COMMENT:
      return deleteComment(state, action);

    default:
      return state;
  }
};

export default profileReducer;


//Экспортируемые функции
export const addPostActionCreator = () => ({type: ADD_POST});
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId});
export const updateNewPostTextActionCreator = (newPostText) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    value: newPostText
  });
export const handleLikeActionCreator = (postId) => ({type: HANDLE_LIKE, postId});
export const toggleCommentsActionCreator = (postId) => ({type: TOGGLE_COMMENTS, postId});
export const updateNewCommentTextActionCreator = (postId, newCommentText) => ({
  type: UPDATE_NEW_COMMENT_TEXT,
  postId,
  value: newCommentText
});
export const replyToCommentTextActionCreator = (commentId, newCommentText, postId) => ({
  type: REPLY_ON_COMMENT_TEXT,
  commentId,
  value: newCommentText,
  postId
});
export const addCommentActionCreator = (postId) =>
  ({
    type: ADD_COMMENT,
    postId,
  });
export const deleteCommentActionCreator = (commentId, postId) =>
  ({
    type: DELETE_COMMENT,
    commentId,
    postId
  });
