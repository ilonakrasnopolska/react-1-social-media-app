import fetchData from "./fetchData"; // Импорт функции для загрузки данных
import { v4 as uuidv4 } from "uuid"; // Импорт библиотеки для генерации уникальных идентификаторов
import {
  startLoading,
  stopLoading,
} from "../redux/SpinnerReducer/spinner-reducer"; // Импорт экшенов для управления состоянием загрузки
import {
  setPostsList,
  setViewedUserId,
  setProfileData,
} from "../redux/ProfileReducer/profile-reducer"; // Импорт экшенов для установки данных постов и профиля
import { setProfileDataEdit } from "../redux/SettingsReducer/settings-reducer"; // Импорт экшена для редактирования данных профиля
import avatars from "../assets/Avatars-src"; // Импорт изображений аватаров
import { CURRENT_USER_NAME } from "../constants/constants"; // Импорт текущего имени пользователя
import { pictures } from "../assets/Pictures-src";


// Заглушки для данных
const texts = [
  `Who is your favourite character in Naruto?`,
  `Where are you from?`,
  `Hello everyone!`,
  `I wish i had more free time to watch anime!`,
  `Have you seen the JK?`,
];
const comments = [
  "Wow! Amazing!",
  "Nice!",
  `Hello everyone!`,
  "Amazing!",
  `Have you seen the JK?`,
  "Great!",
  "Hi!",
];
const users = [
  { name: "Mark", avatar: avatars.markPic },
  { name: "Sunny", avatar: avatars.sunnyPic },
  { name: "Ino", avatar: avatars.inoPic },
  { name: "Anna", avatar: avatars.annaPic },
  { name: "Artur", avatar: avatars.arturPic },
];

const likes = [120, 14, 2, 1, 3, 5, 10, 20, 23, 27];
const times = ["10:00", "11:00", "14:00", "19:00"];

// Функция для генерации фейковых постов
const generateFakePosts = (
  name = CURRENT_USER_NAME,
  avatar = avatars.ilonaSue,
  userId = null
) => {
  return Array.from({ length: 5 }, () => {
    const randomPost = texts[Math.floor(Math.random() * texts.length)];
    const randomAmountOfLike = likes[Math.floor(Math.random() * likes.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];

    // 2-4 случайных комментария
    const commentsCount = Math.floor(Math.random() * 3) + 2;
    const commentMessages = Array.from({ length: commentsCount }, () => {
      // Выбираем случайного пользователя для комментария
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const commentText = comments[Math.floor(Math.random() * comments.length)];
      const commentTime = times[Math.floor(Math.random() * times.length)];
      return {
        commentId: uuidv4(),
        message: commentText,
        user: randomUser.name,
        userId: null, // если нужно, можно добавить id
        time: commentTime,
        avatar: randomUser.avatar,
      };
    });

    return {
      name,
      postId: uuidv4(),
      message: randomPost,
      comments: commentMessages.length,
      likes: randomAmountOfLike,
      time: randomTime,
      likedByUser: false,
      avatar,
      newCommentText: "",
      commentData: {
        commentsVisibility: false,
        messages: commentMessages,
      },
    };
  });
};

// Загрузка постов
export const fetchPosts = (posts, userId) => (dispatch) => {
  dispatch(startLoading());

  if (!userId) {
    // Для своего профиля — загружаем одни и те же посты (если хочешь)
    const defaultPosts = generateFakePosts(); // ← вызывается каждый раз
    dispatch(setPostsList(defaultPosts));
    dispatch(stopLoading());
    return;
  }

  // Для чужого профиля — генерируем посты каждый раз заново
  fetchData(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then((data) => {
      const profileName = data?.fullName || "Unknown";
      const avatar = data?.photos?.small || avatars.defaultPic;
      const userPosts = generateFakePosts(profileName, avatar, userId); // ← вызывается каждый раз
      dispatch(setPostsList(userPosts));
    })
    .catch((error) => {
      console.error("Failed to fetch posts:", error);
    })
    .finally(() => {
      dispatch(stopLoading());
    });
};

// Функция для загрузки данных профиля
export const fetchProfileData = (userInfo, userId) => (dispatch) => {
  // Если данные профиля уже загружены, не выполняем запрос
  if (
    userInfo &&
    Object.keys(userInfo).length > 0 &&
    ((userId === null && userInfo.userId === null) ||
      userInfo.userId === userId)
  ) {
    return; // данные актуальны
  }

  dispatch(startLoading()); // Запуск индикатора загрузки

  if (!userId) {
    // Если userId нет, диспатчим заглушку без запроса
    const personalAccount = {
      userId: null,
      avatar: avatars.ilonaSue,
      name: "Ilona Sue",
      dateOfBirth: "1997-10-12",
      city: "New York",
      gender: "Female",
      favoriteAnime: "Naruto",
      profileCover: `${pictures.Cover}`,
    };
    dispatch(setProfileData(personalAccount));
    dispatch(setProfileDataEdit(personalAccount));
    dispatch(setViewedUserId(null));
    dispatch(stopLoading());
    return;
  }

  // Если userId есть, делаем запрос
  fetchData(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then((data) => {
      if (data) {
        // Пример: формируем профиль из ответа сервера
        const profileFromServer = {
          userId,
          avatar: data.photos?.small || avatars.defaultPic,
          name: data.fullName || "No name",
          dateOfBirth: data.dob || "Unknown",
          city: data.city || "Tel Aviv",
          gender: data.gender || "Male",
          favoriteAnime: data.favoriteAnime || "Naruto",
          profileCover: `${pictures.DefaultWallpaper}`,
          isFollow: false, // Статус подписки (по умолчанию не подписан)
        };
        dispatch(setProfileData(profileFromServer));
        dispatch(setProfileDataEdit(profileFromServer));
        dispatch(setViewedUserId(userId));
      } else {
        // Если по каким-то причинам данных нет, можно диспатчить заглушку
        const personalAccount = {
          userId: null,
          avatar: avatars.ilonaSue,
          name: "Ilona Sue",
          dateOfBirth: "1997-10-12",
          city: "New York",
          gender: "Female",
          favoriteAnime: "Naruto",
        };
        dispatch(setProfileData(personalAccount));
        dispatch(setProfileDataEdit(personalAccount));
        dispatch(setViewedUserId(null));
      }
    })
    .catch((error) => {
      console.error("Failed to fetch profile data:", error);
    })
    .finally(() => {
      dispatch(stopLoading());
    });
};
