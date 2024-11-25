const CURRENT_USER_NAME = "Ilona Sue"
const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`
}
export const updateNewPostTextHelper = (state, action) => {
  return state.newPostText = action.payload;
}
export const addPostHelper = (state) => {
  if (state.newPostText.trim() !== '') {
    let newPostId = Date.now();
    let newPost = {
      name: CURRENT_USER_NAME,
      postId: newPostId,
      message: state.newPostText,
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
    return state
  }
};
export const deletePostHelper = (state, action) => {
  const newPosts = state.posts.filter(post => post.postId !== action.payload);
  if (newPosts.length === state.posts.length) {
    console.error(`Пост с id ${action.payload} не найден.`);
    return;
  }
  return state.posts = newPosts;
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
  return state;
}
export const updateProfileInfoHelper = (state, action) => {
  return state.personalAccount.userData = action.payload;
}
