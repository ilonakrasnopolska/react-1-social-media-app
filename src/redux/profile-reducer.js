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


const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      addPost(state);
      return state;

    case DELETE_POST:
      deletePost(state.posts, action.postId);
      return state;

    case UPDATE_NEW_POST_TEXT:
      updateText(state, 'newPostText', action);
      return state;

    case HANDLE_LIKE:
      handleLike(state.posts, action.postId);
      return state;

    case TOGGLE_COMMENTS:
      toggleComments(
        state.comments,
        action.id,
        'commentsVisibility',
        !state.comments.find(c => c.id === action.id).commentsVisibility
      );
      return state;

    case UPDATE_NEW_COMMENT_TEXT:
      updateNewCommentText(
        state.comments,
        action.postId,
        'newCommentText',
        action.value
      );
      return state;

    case REPLY_ON_COMMENT_TEXT:
      replyOnComment(state, action);
      return state;

    case ADD_COMMENT:
      addComment(state.comments, action.commentsId);
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
const findPostCommentsByCommentId = (state, action) => {
  const postComments = state.comments.find(block =>
    block.messages.find(msg => msg.commentId === action.commentId)
  );
  if (!postComments) {
    console.error(`Блок комментариев с id ${action.commentId} не найден.`);
    return null;
  }
  return postComments;
};
const updateText = (state, property, action) => {
  state[property] = action.value;
}
const toggleComments = (comments, id, property, value) => {
  const item = comments.find(item => item.id === id);
  if (item) {
    item[property] = value;
    return comments
  } else {
    console.error(`Item with id ${id} not found.`);
  }
}
const addPost = (state) => {
  if (state.newPostText.trim() !== '') {
    let newPostId = state.posts.length + 1;
    let newCommentId = state.comments.length +1;
    console.log(newCommentId)
    let newPost = {
      name: CURRENT_USER_NAME,
      postId: newPostId++,
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
    console.log(newPost)
    console.log(newPostId)

    state.comments.push(comments);
    newPost.commentData.push(comments)
    state.posts.push(newPost);

    state.newPostText = ''
    return state
  }
}
const deletePost = (posts, postId) => {
  const postIndex = posts.findIndex(post => post.postId === postId);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
  } else {
    console.error(`Пост с id ${postId} не найден.`);
  }
  return posts;
}
const addComment = (comments, commentsId) => {
  const commentGroup = comments.find(item => item.id === commentsId);
  if (!commentGroup) {
    console.error(`Comments group with id ${commentsId} not found.`);
    return;
  }

  const newCommentText = commentGroup.newCommentText;
  if (newCommentText.trim() === '') return;

  let newCommentId = commentGroup.messages.length +1;
  const newComment = {
    commentId: newCommentId,
    message: newCommentText,
    user: CURRENT_USER_NAME,
    time: getData(),
    avatar: `${avatars.ilonaSue}`
  };

  commentGroup.messages.push(newComment);
  commentGroup.newCommentText = '';
  return comments;
}
const deleteComment = (state, action) => {
  const postComments = findPostCommentsByCommentId(state, action);
  if (!postComments) return;

  // Вместо использования splice, можно попробовать более оптимальные методы
  postComments.messages = postComments.messages.filter(msg => msg.commentId !== action.commentId);
  return postComments;
}
const updateNewCommentText = (comments, postId, property, value) => {
  const commentGroup = comments.find(item => item.id === postId);
  if (commentGroup) {
    commentGroup[property] = value;
    return comments;
  } else {
    console.error(`Comment group with id ${postId} not found.`);
  }
}
const replyOnComment = (state, action) => {
  const postComments = findPostCommentsByCommentId(state, action)
  postComments.newCommentText = action.value;
  return state;
}
const handleLike = (posts, postId) => {
  const post = posts.find(item => item.postId === postId);
  if (!post) {
    console.error(`Post with id ${postId} not found.`);
    return;
  }
  post.likedByUser ? post.likes-- : post.likes++;
  post.likedByUser = !post.likedByUser;
  return post;
}

//Экспортируемые функции
export const addPostActionCreator = () => ({type: ADD_POST});
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId: postId});
export const updateNewPostTextActionCreator = (newPostText) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    value: newPostText
  });
export const handleLikeActionCreator = (postId) => ({type: HANDLE_LIKE, postId: postId});
export const toggleCommentsActionCreator = (id) => ({type: TOGGLE_COMMENTS, id: id});
export const updateNewCommentTextActionCreator = (postId, newCommentText) => ({
  type: UPDATE_NEW_COMMENT_TEXT,
  postId: postId,
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
