import fetchData from "./fetchData";
import { setAnimeList } from "../redux/AnimeReducer/anime-reducer";
import {
  startLoading,
  stopLoading,
} from "../redux/SpinnerReducer/spinner-reducer";
import avatars from "../assets/Avatars-src";
import { baseAnimeUrl } from "../constants/constants";

// Функция для загрузки списка популярных аниме
export const fetchAnime = (animeData) => (dispatch) => {
  // Если список уже загружен, выходим из функции
  if (
    Array.isArray(animeData) &&
    animeData.length > 0 &&
    animeData.some((anime) => anime?.id)
  ) {
    return;
  }

  // Показываем индикатор загрузки
  dispatch(startLoading());

  // Делаем запрос к API, чтобы получить список аниме
  fetchData("https://api.jikan.moe/v4/top/anime", {
    type: "tv", // Берем только сериалы
    filter: "bypopularity", // Сортируем по популярности
    limit: 25, // Берем 25 штук
  })
    .then((data) => {
      // Проверяем, пришли ли данные
      if (data?.data) {
        // Преобразуем список аниме в удобный формат
        const animeArr = data.data.map((anime) => ({
          id: anime.mal_id, // ID аниме
          name: anime.title_english || anime.title, // Название на английском или оригинальном языке
          trailer: anime.trailer?.url
            ? `https://www.youtube.com/embed/${new URL(
                anime.trailer.url
              ).searchParams.get("v")}`
            : null, // Берем ссылку на трейлер
          description: anime.synopsis || "Описание отсутствует.", // Краткое описание
          episodes: anime.episodes || "Неизвестно", // Количество серий
          cover: anime.images?.jpg?.image_url || avatars.defaultPic, // Картинка или заглушка
          genres: anime.genres || [], // Жанры
          year: anime.year || "Неизвестно", // Год выхода
          score: anime.score || "N/A", // Оценка (если нет, пишем "N/A")
          toWatchUrl: `${baseAnimeUrl}${anime.mal_id}`, // Ссылка на аниме
          rating: null, // Здесь будет оценка от пользователей
          votes: {
            likes: Number(anime.mal_id) || 0, // Просто временное число лайков
            dislikes: 2, // Дизлайки (можно изменить)
          },
        }));

        // Сохраняем список аниме в Redux
        dispatch(setAnimeList(animeArr));
      }
    })
    .catch((error) => {
      // Если произошла ошибка, выводим в консоль
      console.error("Ошибка при загрузке аниме:", error);
    })
    .finally(() => {
      // В любом случае скрываем индикатор загрузки
      dispatch(stopLoading());
    });
};
