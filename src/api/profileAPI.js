import fetchData from "./fetchData"; // Импорт функции для загрузки данных
import { v4 as uuidv4 } from "uuid"; // Импорт библиотеки для генерации уникальных идентификаторов
import {
  startLoading,
  stopLoading,
} from "../redux/SpinnerReducer/spinner-reducer"; // Импорт экшенов для управления состоянием загрузки
import {
  setPostsList,
  setProfileData,
} from "../redux/ProfileReducer/profile-reducer"; // Импорт экшенов для установки данных постов и профиля
import { setProfileDataEdit } from "../redux/SettingsReducer/settings-reducer"; // Импорт экшена для редактирования данных профиля
import avatars from "../assets/Avatars-src"; // Импорт изображений аватаров
import { CURRENT_USER_NAME } from "../constants/constants"; // Импорт текущего имени пользователя

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

const likes = [120, 14, 2, 1, 3, 5, 10, 20, 23, 27];
const times = ["10:00", "11:00", "14:00", "19:00"];

// Функция для загрузки постов
export const fetchPosts = (posts) => (dispatch) => {
  // Если посты уже загружены, не выполняем запрос
  if (posts && Object.keys(posts).length > 0) return;

  dispatch(startLoading()); // Запуск индикатора загрузки

  // Выполняем запрос на сервер (имитация данных)
  fetchData("https://social-network.samuraijs.com/api/1.0/users")
    .then((data) => {
      // Если данные получены, создаем список постов
      if (data && data.items) {
        const postsArr = data.items.map((item) => {
          // Для каждого поста генерируем случайные значения из заглушек
          const randomPost = texts[Math.floor(Math.random() * texts.length)];
          const randomAmountOfLike =
            likes[Math.floor(Math.random() * likes.length)];
          const randomTime = times[Math.floor(Math.random() * times.length)];
          const randomComment =
            comments[Math.floor(Math.random() * comments.length)];

          // Создаем объект поста
          return {
            name: CURRENT_USER_NAME, // Имя пользователя
            postId: uuidv4(), // Уникальный ID поста
            message: randomPost, // Содержание поста
            comments: 1, // Количество комментариев (заглушка)
            likes: randomAmountOfLike, // Количество лайков
            time: randomTime, // Время публикации
            likedByUser: false, // Лайкнут ли пост пользователем
            avatar: avatars.ilonaSue, // Аватар пользователя
            newCommentText: "", // Новый текст комментария (пока пусто)
            commentData: {
              commentsVisibility: false, // Скрыты ли комментарии
              messages: [
                {
                  commentId: uuidv4(), // Уникальный ID комментария
                  message: randomComment, // Текст комментария
                  user: item.name, // Имя пользователя, оставившего комментарий
                  userId: item.id, // ID пользователя
                  time: randomTime, // Время комментария
                  avatar: item.photos?.small || avatars.defaultPic, // Аватар пользователя (если есть, иначе дефолтный)
                },
              ],
            },
          };
        });

        // Диспатчим список постов в редьюсер
        dispatch(setPostsList(postsArr));
      }
    })
    .catch((error) => {
      // Логируем ошибку в случае неудачи
      console.error("Failed to fetch posts:", error);
    })
    .finally(() => {
      // Завершаем индикатор загрузки
      dispatch(stopLoading());
    });
};

// Функция для загрузки данных профиля
export const fetchProfileData = (userInfo) => (dispatch) => {
  // Если данные профиля уже загружены, не выполняем запрос
  if (userInfo && Object.keys(userInfo).length > 0) return;

  dispatch(startLoading()); // Запуск индикатора загрузки

  // Выполняем запрос на сервер для получения данных профиля (имитация данных)
  fetchData("https://social-network.samuraijs.com/api/1.0/users")
    .then((data) => {
      // Если данные получены, создаем данные профиля
      if (data && data.items) {
        const personalAccount = {
          avatar: avatars.ilonaSue, // Аватар
          name: "Ilona Sue", // Имя пользователя
          dateOfBirth: "1997-10-12", // Дата рождения
          city: "New York", // Город
          gender: "Female", // Пол
          favoriteAnime: "Naruto", // Любимое аниме
        };
        // Диспатчим данные профиля в редьюсеры
        dispatch(setProfileData(personalAccount));
        dispatch(setProfileDataEdit(personalAccount));
      }
    })
    .catch((error) => {
      // Логируем ошибку в случае неудачи
      console.error("Failed to fetch profile data:", error);
    })
    .finally(() => {
      // Завершаем индикатор загрузки
      dispatch(stopLoading());
    });
};
