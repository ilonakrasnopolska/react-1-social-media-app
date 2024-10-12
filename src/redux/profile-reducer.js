// Константы
import avatars from "./Avatars-src";

const CURRENT_USER_NAME = "Ilona Sue"
const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const HANDLE_LIKE = "HANDLE-LIKE";
const TOGGLE_COMMENTS = 'TOGGLE-COMMENTS';
const UPDATE_NEW_COMMENT_TEXT = "UPDATE-NEW-COMMENT-TEXT";
const REPLY_ON_COMMENT_TEXT = "REPLY-ON-COMMENT-TEXT";
const ADD_COMMENT = "ADD-COMMENT";
const DELETE_COMMENT = "DELETE-COMMENT";

// Счетчики
let postIdCounter = 1;
let commentBlockIdCounter = 1;
let commentIdCounter = 1;

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      addPost(state);
      return state;

    case DELETE_POST:
      deletePost(state, action);
      return state;

    case UPDATE_NEW_POST_TEXT:
      updateText(state, 'newPostText', action);
      return state;

    case HANDLE_LIKE:
      handleLike(state, action);
      return state;

    case TOGGLE_COMMENTS:
      updatePropertyById(
        state.comments,
        action.id,
        'commentsVisibility',
        !state.comments.find(c => c.id === action.id).commentsVisibility
      );
      return state;

    case UPDATE_NEW_COMMENT_TEXT:
      updatePropertyById(
        state.comments,
        action.commentsId,
        'newCommentText',
        action.value
      );
      return state;

    case REPLY_ON_COMMENT_TEXT:
      replyOnComment(state, action);
      return state;

    case ADD_COMMENT:
      addComment(state, action);
      return state;

    case DELETE_COMMENT:
      deleteComment(state, action);
      return state;

    default:
      return state;
  }
};

export default profileReducer;

//Функции
const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`
}
const findById = (state, id) => {
  return state.find(item => item.id === id);
}
const findPostCommentsByCommentId = (state, action) => {
  const postCommentsList = state.comments;
  const postComments = postCommentsList.find(block =>
    block.messages.some(msg => msg.commentId === action.commentId)
  );
  if (!postComments) {
    console.error(`Блок комментариев с комментариями, содержащими id ${action.commentId}, не найден.`);
    return null;
  }
  return postComments
}
const updateText = (state, property, action) => {
  state[property] = action.value;
}
const updatePropertyById = (state, action, property, value) => {
  const item = findById(state, action);
  if (item) {
    item[property] = value;
    return state
  } else {
    console.error(`Item with id ${action} not found.`);
  }
}
const addPost = (state) => {
  if (state.newPostText.trim() !== '') {
    let newPostId = postIdCounter++;
    let newCommentId = commentBlockIdCounter++;
    let newPost = {
      name: CURRENT_USER_NAME,
      id: newPostId,
      message: state.newPostText,
      comments: 0,
      likes: 0,
      time: getData(),
      likedByUser: false,
      commentData: [],
    }
    let comments = {
      id: newCommentId,
      commentsVisibility: false,
      messages: [],
      newCommentText: '',
    }

    state.comments.push(comments);
    newPost.commentData.push(comments)
    state.posts.push(newPost);

    state.newPostText = ''
    return state
  }
}
const deletePost = (state, action) => {
  const posts = state.posts;
  const postIndex = posts.findIndex(post => post.id === action.id);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
  } else {
    console.error(`Пост с id ${action.id} не найден.`);
  }
  return state
}
const addComment = (state, action) => {
  const commentGroup = findById(state.comments, action.commentsId);
  if (!commentGroup) {
    console.error(`Comments group with id ${action.commentsId} not found.`);
    return;
  }

  const newCommentText = commentGroup.newCommentText;
  if (newCommentText.trim() === '') return;

  const newComment = {
    commentId: commentIdCounter++,
    message: newCommentText,
    user: CURRENT_USER_NAME,
    time: getData(),
    avatar: `${avatars.ilonaSue}`
  };

  commentGroup.messages.push(newComment);
  commentGroup.newCommentText = '';
  return state;
}
const deleteComment = (state, action) => {
  const postComments = findPostCommentsByCommentId(state, action)
  const commentIndex = postComments.messages.findIndex(msg => msg.commentId === action.commentId);
  if (commentIndex !== -1) {
    postComments.messages.splice(commentIndex, 1);
    return postComments
  } else {
    console.error(`Комментарий с id ${action.commentId} не найден.`);
  }
}
const replyOnComment = (state, action) => {
  const postComments = findPostCommentsByCommentId(state, action)
  postComments.newCommentText = action.value;
  return state;
}
const handleLike = (state, action) => {
  const post = findById(state.posts, action.id);
  if (!post) {
    console.error(`Post with id ${action.id} not found.`);
    return;
  }
  post.likedByUser ? post.likes-- : post.likes++;
  post.likedByUser = !post.likedByUser;
  return state;
}

//Экспортируемые функции
export const addPostActionCreator = () => ({type: ADD_POST});
export const deletePostActionCreator = (id) => ({type: DELETE_POST, id: id});
export const updateNewPostTextActionCreator = (newPostText) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    value: newPostText
  });
export const handleLikeActionCreator = (id) => ({type: HANDLE_LIKE, id: id});
export const toggleCommentsActionCreator = (id) => ({type: TOGGLE_COMMENTS, id: id});
export const updateNewCommentTextActionCreator = (commentsId, newCommentText) => ({
  type: UPDATE_NEW_COMMENT_TEXT,
  commentsId: commentsId,
  value: newCommentText
});
export const replyToCommentTextActionCreator = (commentId, newCommentText) => ({
  type: REPLY_ON_COMMENT_TEXT,
  commentId: commentId,
  value: newCommentText
});
export const addCommentActionCreator = (commentsId) =>
  ({
    type: ADD_COMMENT,
    commentsId: commentsId,
  });
export const deleteCommentActionCreator = (commentId) =>
  ({
    type: DELETE_COMMENT,
    commentId: commentId,
  });
