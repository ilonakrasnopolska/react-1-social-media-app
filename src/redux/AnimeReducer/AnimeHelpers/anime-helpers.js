import { ANIME_LIST_TYPES } from "../../../constants/constants";

// Хелпер-функция для переключения аниме в списке (добавить или удалить в зависимости от наличия)
const toggleAnimeInList = (animeList, filteredAnime, action) => {
  const anime = action.payload.animeObj; // Получаем объект аниме из payload
  const index = animeList.findIndex((item) => item.id === anime.id); // Находим индекс аниме в основном списке
  const indexFiltered = filteredAnime.findIndex((item) => item.id === anime.id); // Находим индекс аниме в отфильтрованном списке

  if (index !== -1) {
    // Если аниме уже существует в списке, удаляем его из обоих списков
    animeList.splice(index, 1);
    filteredAnime.splice(indexFiltered, 1);
  } else {
    // Если аниме нет в списке, добавляем его в основной список
    animeList.push(anime);
  }
};

// Устанавливаем список аниме и отфильтрованный список
export const setAnimeListHelper = (state, action) => {
  state.anime = action.payload; // Устанавливаем все аниме в состояние
  state.filteredAnime = action.payload; // Отфильтрованный список аниме изначально содержит все аниме
};

// Обновляем текст поиска
export const updateSearchAnimeTextHelper = (state, action) => {
  state.newSearchAnimeText = action.payload.text; // Обновляем текст поискового запроса в состоянии
};

// Фильтруем список аниме на основе текста поиска
export const filterAnimeListHelper = (state) => {
  if (state.newSearchAnimeText === "") {
    // Если текст поиска пустой, показываем все аниме
    state.filteredAnime = state.anime;
  } else {
    // Иначе фильтруем аниме по имени на основе текста поиска
    state.filteredAnime = state.anime.filter((anime) => {
      const animeName = anime.name.toLowerCase();
      return animeName.includes(state.newSearchAnimeText.toLowerCase());
    });
  }
};

// Очищаем поисковый запрос и сбрасываем отфильтрованный список на все аниме
export const clearSearchQueryHelper = (state) => {
  state.newSearchAnimeText = ""; // Очищаем текст поискового запроса
  state.filteredAnime = state.anime; // Сбрасываем отфильтрованный список на все аниме
};

// Переключаем аниме в списке для просмотра (добавляем или удаляем)
export const toggleWatchListHelper = (state, action) => {
  toggleAnimeInList(state.watchList, state.filteredAnime, action); // Переключаем аниме в списке для просмотра
};

// Переключаем аниме в списке просмотренных (добавляем или удаляем)
export const toggleWatchedListHelper = (state, action) => {
  toggleAnimeInList(state.watchedList, state.filteredAnime, action); // Переключаем аниме в списке просмотренных
};

// Устанавливаем рейтинг для аниме
export const setRatingHelper = (state, action) => {
  const rating = action.payload.rating; // Получаем рейтинг из payload
  const animeObj = state.anime.find(
    (obj) => obj.id === action.payload.animeObj.id // Находим аниме по его ID
  );

  if (animeObj) {
    if (animeObj.rating === rating) {
      // Если рейтинг уже такой же, удаляем его
      animeObj.rating = null;
      if (rating === true) {
        animeObj.votes.likes -= 1; // Уменьшаем количество лайков
      } else if (rating === false) {
        animeObj.votes.dislikes -= 1; // Уменьшаем количество дизлайков
      }
    } else {
      // Если рейтинг изменился, обновляем количество голосов
      if (rating === true) {
        animeObj.votes.likes += 1; // Увеличиваем количество лайков
        if (animeObj.rating === false) {
          animeObj.votes.dislikes -= 1; // Уменьшаем дизлайк, если был раньше
        }
      } else if (rating === false) {
        animeObj.votes.dislikes += 1; // Увеличиваем количество дизлайков
        if (animeObj.rating === true) {
          animeObj.votes.likes -= 1; // Уменьшаем лайк, если был раньше
        }
      }
      animeObj.rating = rating; // Обновляем рейтинг
    }
  }
};

// Фильтруем список аниме в зависимости от типа списка (для просмотра, просмотренные или все)
export const showAnimeListHelper = (state, action) => {
  switch (action.payload.text) {
    case ANIME_LIST_TYPES.WATCH:
      state.filteredAnime = state.watchList.length > 0 ? state.watchList : []; // Показываем список для просмотра, если он не пуст
      break;
    case ANIME_LIST_TYPES.WATCHED:
      state.filteredAnime =
        state.watchedList.length > 0 ? state.watchedList : []; // Показываем список просмотренных, если он не пуст
      break;
    case ANIME_LIST_TYPES.ALL:
      state.filteredAnime = state.anime.length > 0 ? state.anime : []; // Показываем все аниме, если оно доступно
      break;
    default:
      console.log("not found"); // Если тип не найден, выводим сообщение
  }
};
