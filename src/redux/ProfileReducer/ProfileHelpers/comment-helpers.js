import avatars from "../../Assets/Avatars-src";

const CURRENT_USER_NAME = "Ilona Sue"
const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`
}
export const addCommentHelper = (state, action) => {
  const post = state.posts.find(item => item.postId === action.payload.postId);

  if (!post) {
    console.error(`Post with ID ${action.payload.postId} not found`);
    return;
  }

  const newCommentText = post.newCommentText;

  if (!newCommentText || newCommentText.trim() === '') {
    return;
  }

  const newCommentId = post.commentData.messages.length + 1;
  const newComment = {
    commentId: newCommentId,
    message: newCommentText,
    user: CURRENT_USER_NAME,
    time: getData(),
    avatar: avatars.ilonaSue,
  };

  post.commentData.messages.push(newComment);
  post.comments += 1;
  post.newCommentText = '';
  return state;
}
export const deleteCommentHelper = (state, action) => {
  const post = state.posts.find(item => item.postId === action.payload.postId);

  if (!post) {
    console.error(`Post with ID ${action.payload.postId} not found`);
    return;
  }

  post.commentData.messages = post.commentData.messages.filter(comment => comment.commentId !== action.payload.commentId);
  post.comments -= 1;
  return state;
}
export const replyOnCommentHelper = (state, action) => {
  updateNewCommentTextHelper(state, action);
}
export const updateNewCommentTextHelper = (state, action) => {
  const post = state.posts.find(item => item.postId === action.payload.postId);
  if (post) {
    post.newCommentText = action.payload.value;
  }
  return state;
}

