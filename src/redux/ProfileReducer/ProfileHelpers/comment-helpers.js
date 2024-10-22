import avatars from "../../Avatars-src";

const CURRENT_USER_NAME = "Ilona Sue"
const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`
}
export const addCommentHelper = (state, action) => {
  // Находим конкретный пост по postId
  const postGroup = state.posts.find(item => item.postId === action.postId);

  // Проверка на существование поста
  if (!postGroup) {
    console.log(state.posts)
    console.error(`Post with ID ${action.postId} not found`);
    return state;
  }

  // Получаем текст комментария, который нужно добавить
  const newCommentText = postGroup.newCommentText;

  // Если комментарий пустой, ничего не делаем
  if (!newCommentText || newCommentText.trim() === '') {
    console.error('New comment text is empty');
    return state;
  }

  // Создаем новый комментарий
  let newCommentId = postGroup.commentData.messages.length + 1;
  const newComment = {
    commentId: newCommentId,
    message: newCommentText,
    user: CURRENT_USER_NAME,
    time: getData(),
    avatar: `${avatars.ilonaSue}`
  };

  // Обновляем только найденный пост
  const updatedPosts = state.posts.map(post => {
    if (post.postId === action.postId) {
      return {
        ...post,
        commentData: {
          ...post.commentData,
          messages: [...post.commentData.messages, newComment], // Добавляем новый комментарий
        },
        newCommentText: '' // Очищаем поле для нового комментария
      };
    }
    return post; // Возвращаем пост без изменений, если это не тот пост
  });

  // Возвращаем обновленное состояние
  return {
    ...state,
    posts: updatedPosts,
  };
}
export const deleteCommentHelper = (state, action) => {
  // Обновляем массив постов
  const updatedPosts = state.posts.map(post => {
    // Находим пост по postId
    if (post.postId === action.postId) {
      let updatedComments = post.commentData.messages.filter(comment => comment.commentId !== action.commentId)
      // Если пост найден, обновляем его commentData
      return {
        ...post,
        commentData: {
          ...post.commentData,
          // Фильтруем сообщения, исключая комментарий с нужным commentId
          messages: updatedComments
        }
      };
    }
    // Возвращаем пост без изменений, если postId не совпадает
    return post;
  });

  // Возвращаем новое состояние с обновленными постами
  return {
    ...state,
    posts: updatedPosts,
  };
};
export const replyOnCommentHelper = (state, action) => {
  const updatedPosts = state.posts.map(post => {
    if (post.postId === action.postId) {
      return {
        ...post,
        newCommentText: action.value
      };
    }
    return post;
  });

  return {
    ...state,
    posts: updatedPosts,
  };
};
export const updateNewCommentTextHelper = (state, action) => {
  const updatedPosts = state.posts.map(post => {
    if (post.postId === action.postId) {
      return {
        ...post,
        newCommentText: action.value
      };
    }
    return post;
  });

  return {
    ...state,
    posts: updatedPosts,
  };
}

