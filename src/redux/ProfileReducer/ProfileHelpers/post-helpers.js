const CURRENT_USER_NAME = "Ilona Sue"
const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`
}
export const updateNewPostText = (state, action) => {
  return {
    ...state,
    newPostText: action.value,
  };
}
export const addPost = (state) => {
  if (state.newPostText.trim() !== '') {
    let newPostId = state.posts.length + 1;
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

    // Возвращаем новый стейт
    return {
      ...state,
      posts: [...state.posts, newPost],
      newPostText: '', // Очищаем поле для нового поста
    };
  }

  return state; // Возвращаем неизменённый стейт, если текст поста пустой
};
export const deletePost = (state, action) => {
   const newPosts = state.posts.filter(post => post.postId !== action.postId);
  if (newPosts.length === state.posts.length) {
    console.error(`Пост с id ${action.postId} не найден.`);
    return state; // Возвращаем неизменённый стейт, если пост не найден
  }

  return {
    ...state,
    posts: newPosts,
  };
};
export const toggleComments = (state, action) => {
  return {
    ...state,
    posts: state.posts.map(post =>
      post.postId === action.postId
        ? {
          ...post,
          commentData: {
            ...post.commentData,
            commentsVisibility: !post.commentData.commentsVisibility, // Переключаем видимость комментариев
          },
        }
        : post
    ),
  };
}
export const handleLike = (state, action) => {
  const updatedPosts = state.posts.map(post => {
    if (post.postId === action.postId) {
      return {
        ...post,
        likedByUser: !post.likedByUser,
        likes: post.likedByUser ? post.likes - 1 : post.likes + 1,
      };
    }
    return post;
  });

  return {
    ...state,
    posts: updatedPosts,
  };
}
