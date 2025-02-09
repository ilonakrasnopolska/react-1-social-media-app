import avatars from "../../../assets/Avatars-src";

const CURRENT_USER_NAME = "Ilona Sue"
const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`
}
export const updateNewPostTextHelper = (state, action) => {
  return state.newPostText = action.payload.text;
}
export const addPostHelper = (state) => {
  if (state.newPostText.trim() !== '') {
    let newPostId = Date.now();
    let newPost = {
      name: CURRENT_USER_NAME,
      postId: newPostId,
      message: state.newPostText,
      avatar: avatars.ilonaSue,
      comments: 0,
      likes: 0,
      time: getData(),
      likedByUser: false,
      commentData: {
        commentsVisibility: false,
        messages: []
      },
    }

    state.posts.push(newPost);
    state.newPostText = '';
  }
};
export const deletePostHelper = (state, action) => {
  state.posts = state.posts.filter((post) => post.postId !== action.payload);
}
export const toggleCommentsHelper = (state, action) => {
  const post = state.posts.find(post => post.postId === action.payload);
  if (post) {
    post.commentData.commentsVisibility = !post.commentData.commentsVisibility;
  }
  return state;
}
export const handleLikeHelper = (state, action) => {
  const post = state.posts.find(post => post.postId === action.payload);
  if (post) {
    post.likedByUser = !post.likedByUser;
    post.likes += post.likedByUser ? 1 : -1;
  }
}
export const updateProfileInfoHelper = (state, action) => {
  state.personalAccount.userData = { ...state.personalAccount.userData, ...action.payload };
}
