import { createSlice } from "@reduxjs/toolkit";

// Импорт хелперов для работы с постами и комментариями
import {
  setPostsListHelper,
  setViewedUserIdHelper,
  setProfileDataHelper,
  addPostHelper,
  deletePostHelper,
  updateNewPostTextHelper,
  handleLikeHelper,
  toggleCommentsHelper,
  updateProfileInfoHelper,
} from "./ProfileHelpers/post-helpers";
import {
  updateNewCommentTextHelper,
  replyOnCommentHelper,
  addCommentHelper,
  deleteCommentHelper,
} from "./ProfileHelpers/comment-helpers";

// Начальное состояние для слайса профиля
const initialState = {
  posts: [], // Список постов
  personalAccount: { userData: {} }, // Данные пользователя
  newPostText: "", // Текст нового поста
  viewedUserId: null, //Пользователь чью страницу мы смотрим
};

// Слайс для управления профилем
const profileSlice = createSlice({
  name: "profile", // Имя слайса
  initialState, // Начальное состояние
  reducers: {
    // Установка списка постов
    setPostsList: (state, action) => {
      setPostsListHelper(state, action); // Вызов хелпера для установки списка постов
    },
    // Хелпер для установки id пользователя на чьей мы странице
    setViewedUserId: (state, action) => {
      setViewedUserIdHelper(state, action); // Вызов хелпера
    },
    // Установка данных профиля
    setProfileData: (state, action) => {
      setProfileDataHelper(state, action); // Вызов хелпера для установки данных профиля
    },
    // Добавление нового поста
    addPost: (state) => {
      addPostHelper(state); // Вызов хелпера для добавления нового поста
    },
    // Удаление поста
    deletePost: (state, action) => {
      deletePostHelper(state, action); // Вызов хелпера для удаления поста
    },
    // Обновление текста нового поста
    updateNewPostText: (state, action) => {
      updateNewPostTextHelper(state, action); // Вызов хелпера для обновления текста нового поста
    },
    // Обработка лайка
    handleLike: (state, action) => {
      handleLikeHelper(state, action); // Вызов хелпера для обработки лайка
    },
    // Переключение видимости комментариев
    toggleComments: (state, action) => {
      toggleCommentsHelper(state, action); // Вызов хелпера для переключения видимости комментариев
    },
    // Обновление текста нового комментария
    updateNewCommentText: (state, action) => {
      updateNewCommentTextHelper(state, action); // Вызов хелпера для обновления текста нового комментария
    },
    // Ответ на комментарий
    replyOnComment: (state, action) => {
      replyOnCommentHelper(state, action); // Вызов хелпера для ответа на комментарий
    },
    // Добавление нового комментария
    addComment: (state, action) => {
      addCommentHelper(state, action); // Вызов хелпера для добавления нового комментария
    },
    // Удаление комментария
    deleteComment: (state, action) => {
      deleteCommentHelper(state, action); // Вызов хелпера для удаления комментария
    },
    // Обновление информации профиля
    updateProfileInfo: (state, action) => {
      updateProfileInfoHelper(state, action); // Вызов хелпера для обновления информации профиля
    },
  },
});

// Экспорт всех действий слайса
export const {
  setPostsList,
  setViewedUserId,
  setProfileData,
  addPost,
  deletePost,
  updateNewPostText,
  handleLike,
  toggleComments,
  updateNewCommentText,
  replyOnComment,
  addComment,
  deleteComment,
  updateProfileInfo,
} = profileSlice.actions;

// Экспорт редьюсера слайса
export default profileSlice.reducer;
