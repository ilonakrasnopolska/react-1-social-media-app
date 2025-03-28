import { v4 as uuidv4 } from "uuid";
import fetchData from "./fetchData";
import { setUsersList } from "../redux/DialogsReducer/dialogs-reducer";
import {
  startLoading,
  stopLoading,
} from "../redux/SpinnerReducer/spinner-reducer";
import avatars from "../assets/Avatars-src";
import { baseMessageUrl } from "../constants/constants";

// Заглушка пользователей для тестирования (пока нет реального API)
const users = [
  {
    name: "Mark",
    userId: uuidv4(),
    url: `${baseMessageUrl}${uuidv4()}`,
    avatar: `${avatars.markPic}`,
    chat: {
      chatId: uuidv4(),
      participants: ["Mark", "Ilona Sue"],
      messages: [
        {
          name: "Mark",
          message: "Hello there!",
          id: uuidv4(),
          time: "17:28",
          avatar: avatars.markPic,
        },
        {
          name: "Ilona Sue",
          message: "Hi",
          id: uuidv4(),
          time: "17:50",
          avatar: avatars.ilonaSue,
        },
        {
          name: "Mark",
          message: "Have you seen Jujutsu K?",
          id: uuidv4(),
          time: "19:00",
          avatar: avatars.markPic,
        },
        {
          name: "Ilona Sue",
          message: "Yeah",
          id: uuidv4(),
          time: "19:10",
          avatar: avatars.ilonaSue,
        },
        {
          name: "Mark",
          message: "How old are you?",
          id: uuidv4(),
          time: "20:00",
          avatar: avatars.markPic,
        },
        {
          name: "Mark",
          message: "Can I call u?",
          id: uuidv4(),
          time: "20:10",
          avatar: avatars.markPic,
        },
        {
          name: "Mark",
          message: "Where are u?",
          id: uuidv4(),
          time: "22:00",
          avatar: avatars.markPic,
        },
      ],
    },
  },
  {
    name: "Vikky",
    userId: uuidv4(),
    url: `${baseMessageUrl}${uuidv4()}`,
    avatar: `${avatars.vikkyPic}`,
    chat: {
      chatId: uuidv4(),
      participants: ["Vikky", "Ilona Sue"],
      messages: [
        {
          name: "Vikky",
          message: "Hello there!",
          id: uuidv4(),
          time: "17:28",
          avatar: avatars.vikkyPic,
        },
      ],
    },
  },
  {
    name: "Sunny",
    userId: uuidv4(),
    url: `${baseMessageUrl}${uuidv4()}`,
    avatar: `${avatars.sunnyPic}`,
    chat: {
      chatId: uuidv4(),
      participants: ["Sunny", "Ilona Sue"],
      messages: [
        {
          name: "Sunny",
          message: "Hi!",
          id: uuidv4(),
          time: "17:28",
          avatar: avatars.sunnyPic,
        },
        {
          name: "Ilona Sue",
          message: "Hi",
          id: uuidv4(),
          time: "17:50",
          avatar: avatars.ilonaSue,
        },
        {
          name: "Sunny",
          message: "Have you seen Naruto?",
          id: uuidv4(),
          time: "19:00",
          avatar: avatars.sunnyPic,
        },
      ],
    },
  },
  {
    name: "Phillip",
    userId: uuidv4(),
    url: `${baseMessageUrl}${uuidv4()}`,
    avatar: `${avatars.phillipPic}`,
    chat: {
      chatId: uuidv4(),
      participants: ["Phillip", "Ilona Sue"],
      messages: [
        {
          name: "Phillip",
          message: "Where are u?!",
          id: uuidv4(),
          time: "17:28",
          avatar: avatars.phillipPic,
        },
        {
          name: "Ilona Sue",
          message: "Here",
          id: uuidv4(),
          time: "17:50",
          avatar: avatars.ilonaSue,
        },
        {
          name: "Phillip",
          message: "How old are you?",
          id: uuidv4(),
          time: "19:00",
          avatar: avatars.phillipPic,
        },
        {
          name: "Ilona Sue",
          message: "25",
          id: uuidv4(),
          time: "19:10",
          avatar: avatars.ilonaSue,
        },
      ],
    },
  },
  {
    name: "Elon",
    userId: uuidv4(),
    url: `${baseMessageUrl}${uuidv4()}`,
    avatar: `${avatars.elonPic}`,
    chat: {
      chatId: uuidv4(),
      participants: ["Elon", "Ilona Sue"],
      messages: [
        {
          name: "Elon",
          message: "Hello there!",
          id: uuidv4(),
          time: "17:28",
          avatar: avatars.elonPic,
        },
        {
          name: "Ilona Sue",
          message: "Hi",
          id: uuidv4(),
          time: "17:50",
          avatar: avatars.ilonaSue,
        },
        {
          name: "Elon",
          message: "Have you seen One Piece?",
          id: uuidv4(),
          time: "19:00",
          avatar: avatars.elonPic,
        },
        {
          name: "Ilona Sue",
          message: "Yeah",
          id: uuidv4(),
          time: "19:10",
          avatar: avatars.ilonaSue,
        },
      ],
    },
  },
  {
    name: "Sakura",
    userId: uuidv4(),
    url: `${baseMessageUrl}${uuidv4()}`,
    avatar: `${avatars.sakuraPic}`,
    chat: {
      chatId: uuidv4(),
      participants: ["Sakura", "Ilona Sue"],
      messages: [
        {
          name: "Sakura",
          message: "Are you ready?!",
          id: uuidv4(),
          time: "17:28",
          avatar: avatars.sakuraPic,
        },
        {
          name: "Ilona Sue",
          message: "Nope",
          id: uuidv4(),
          time: "17:50",
          avatar: avatars.ilonaSue,
        },
      ],
    },
  },
  {
    name: "Ino",
    userId: uuidv4(),
    url: `${baseMessageUrl}${uuidv4()}`,
    avatar: `${avatars.inoPic}`,
    chat: {
      chatId: uuidv4(),
      participants: ["Ino", "Ilona Sue"],
      messages: [
        {
          name: "Ino",
          message: "Hello there!",
          id: uuidv4(),
          time: "17:28",
          avatar: avatars.inoPic,
        },
      ],
    },
  },
];

// Функция для получения пользователей (с использованием заглушки)
export const fetchUsers = (dialogsUsers) => (dispatch) => {
  // Если пользователи уже загружены (переданы в качестве аргумента), не запрашиваем их снова
  if (dialogsUsers.length > 0) return;
  dispatch(startLoading());
  fetchData("https://social-network.samuraijs.com/api/1.0/users")
    .then((data) => {
      // Проверяем, если данные получены, то обрабатываем их
      if (data && data.items) {
        const usersArr = users;
        // Отправляем пользователей в Redux Store
        dispatch(setUsersList(usersArr));
      }
    })
    .catch((error) => {
      // Если произошла ошибка при запросе данных, выводим ошибку в консоль
      console.error("Failed to fetch users:", error);
    })
    .finally(() => {
      // Останавливаем индикатор загрузки после завершения запроса (или ошибки)
      dispatch(stopLoading());
    });
};
