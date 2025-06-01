import avatars from "../../../assets/Avatars-src";
import { CURRENT_USER_NAME } from "../../../constants/constants";

// Функция для получения текущего времени в формате чч:мм
const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, "0"); // Получаем часы
  const minutes = String(currentTime.getMinutes()).padStart(2, "0"); // Получаем минуты
  return `${hours}:${minutes}`; // Возвращаем время в формате чч:мм
};

// Хелпер для установки списка постов
export const setPostsListHelper = (state, action) => {
  state.posts = action.payload; // Устанавливаем список постов из payload
};

// Хелпер для установки id пользователя на чьей мы странице
export const setViewedUserIdHelper = (state, action) => {
  state.viewedUserId = action.payload; // Устанавливаем id
};

// Хелпер для установки данных профиля
export const setProfileDataHelper = (state, action) => {
  state.personalAccount.userData = action.payload; // Устанавливаем данные пользователя из payload
};

// Хелпер для обновления текста нового поста
export const updateNewPostTextHelper = (state, action) => {
  return (state.newPostText = action.payload.text); // Обновляем текст нового поста
};

// Хелпер для добавления нового поста
export const addPostHelper = (state) => {
  // Проверяем, не пустой ли текст нового поста
  if (state.newPostText.trim() !== "") {
    let newPostId = Date.now(); // Используем текущую дату и время для уникального ID поста
    let newPost = {
      name: CURRENT_USER_NAME, // Имя пользователя
      postId: newPostId, // ID поста
      message: state.newPostText, // Текст сообщения
      avatar: avatars.ilonaSue, // Аватар пользователя
      comments: 0, // Количество комментариев
      likes: 0, // Количество лайков
      time: getData(), // Время создания поста
      likedByUser: false, // Статус лайка (пользователь не лайкнул по умолчанию)
      commentData: {
        // Данные комментариев
        commentsVisibility: false, // Скрыты ли комментарии по умолчанию
        messages: [], // Список сообщений комментариев
      },
    };

    state.posts.push(newPost); // Добавляем новый пост в список
    state.newPostText = ""; // Очищаем текст нового поста
  }
};

// Хелпер для удаления поста
export const deletePostHelper = (state, action) => {
  state.posts = state.posts.filter((post) => post.postId !== action.payload); // Удаляем пост по ID
};

// Хелпер для переключения видимости комментариев
export const toggleCommentsHelper = (state, action) => {
  const post = state.posts.find((post) => post.postId === action.payload); // Находим пост по ID
  if (post) {
    post.commentData.commentsVisibility = !post.commentData.commentsVisibility; // Переключаем видимость комментариев
  }
  return state; // Возвращаем обновленное состояние
};

// Хелпер для обработки лайков
export const handleLikeHelper = (state, action) => {
  const post = state.posts.find((post) => post.postId === action.payload); // Находим пост по ID
  if (post) {
    post.likedByUser = !post.likedByUser; // Переключаем статус лайка
    post.likes += post.likedByUser ? 1 : -1; // Увеличиваем или уменьшаем количество лайков
  }
};

// Хелпер для обновления данных профиля
export const updateProfileInfoHelper = (state, action) => {
  state.personalAccount.userData = {
    ...state.personalAccount.userData,
    ...action.payload,
  }; // Обновляем данные профиля, объединяя старые и новые
};
