import fetchData from "./fetchData";
import { v4 as uuidv4 } from "uuid"; // Импортируем функцию для генерации уникальных ID
import {
  startLoading,
  stopLoading,
} from "../redux/SpinnerReducer/spinner-reducer";
import { setFeedsList } from "../redux/FeedsReducer/feeds-reducer";
import avatars from "../assets/Avatars-src";

// Заглушки данных, которые мы будем использовать для имитации данных
const categories = ["Fans", "Trends", "Manga", "News"]; // Категории для постов
const times = ["13:34", "12:24", "12:04", "11:54"]; // Время, когда был опубликован пост
const contents = [
  `Have someone seen a new episode of Naruto?`, // Пример контента
  `A new chapter of My Hero Academia manga is coming out tomorrow!`,
  `Did you hear about the Naruto cafe opening?`,
  `A new chapter of Jujutsu Kaisen manga is coming out tomorrow!`,
];

export const fetchFeeds = (posts) => (dispatch) => {
  // Проверяем, если список постов уже существует и не пуст, то не загружаем данные
  if (posts !== undefined && posts.length > 0) {
    return;
  }

  // Запуск загрузки данных
  dispatch(startLoading());

  // Выполняем запрос к API
  fetchData("https://api.jikan.moe/v4/top/anime", {
    limit: 10, // Ограничиваем вывод топ-10 аниме
    sort: "bypopularity", // Сортируем по популярности
  })
    .then((data) => {
      if (data && data.data) {
        // Если получены данные, обрабатываем их
        const feedsArr = data.data.map((post) => {
          // Случайным образом выбираем данные для каждого поста из заранее подготовленных массивов
          const randomCategory =
            categories[Math.floor(Math.random() * categories.length)];
          const randomTime = times[Math.floor(Math.random() * times.length)];
          const randomContent =
            contents[Math.floor(Math.random() * contents.length)];

          // Формируем объект для каждого поста
          return {
            feedId: post.mal_id, // ID поста
            userId: uuidv4(), //генерируем уникальный ID
            name: post.title, // Название аниме
            avatar: post.images?.jpg?.image_url || avatars.defaultPic, // Используем изображение, если оно есть, или заглушку
            category: randomCategory, // Случайная категория
            time: randomTime, // Случайное время
            content: randomContent, // Случайный контент
          };
        });

        // Отправляем список постов в хранилище Redux
        dispatch(setFeedsList(feedsArr));
      }
    })
    .catch((error) => {
      console.error("Failed to fetch random posts:", error); // Логирование ошибки, если запрос не удался
    })
    .finally(() => {
      dispatch(stopLoading()); // Завершаем загрузку
    });
};
