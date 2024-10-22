const CURRENT_USER_NAME = "Ilona Sue"
const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`
}
export const updateNewPostTextHelper = (state, action) => {
  console.log(action.payload);  // Выводим payload для проверки
  return {
    ...state,
    newPostText: action.payload,
  };
}
export const addPostHelper = (state) => {
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
export const deletePostHelper = (state, action) => {
  console.log("Received postId:", action.postId); // Логируем postId, который передается в экшен

  // Фильтруем посты, оставляем только те, у которых postId не совпадает с тем, который передан в экшене
  const newPosts = state.posts.filter(post => post.postId !== action.postId);

  // Если длина массива не изменилась, значит пост с таким id не был найден
  if (newPosts.length === state.posts.length) {
    console.error(`Пост с id ${action.postId} не найден.`);
    return state; // Возвращаем неизменённый стейт, если пост не найден
  }

  console.log("Post successfully deleted");

  // Возвращаем новое состояние с обновленным массивом постов
  return {
    ...state,
    posts: newPosts,
  };
};
export const toggleCommentsHelper = (state, action) => {
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
export const handleLikeHelper = (state, action) => {
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
