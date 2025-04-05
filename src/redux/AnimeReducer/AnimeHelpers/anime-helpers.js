import { ANIME_LIST_TYPES } from "../../../constants/constants";

// Устанавливаем список аниме и отфильтрованный список
export const setAnimeListHelper = (state, action) => {
  state.anime = action.payload; // Устанавливаем все аниме в состояние
  state.currentList = action.payload; //Устанавливаем все аниме в текущий лист
};

// Обновляем текст поиска
export const updateSearchAnimeTextHelper = (state, action) => {
  state.newSearchAnimeText = action.payload.text; // Обновляем текст поискового запроса в состоянии
};

// Фильтруем список аниме на основе текста поиска
export const filterAnimeListHelper = (state) => {
  if (state.newSearchAnimeText === "") {
    // Если текст поиска пустой, показываем все аниме
    state.currentList = state.anime;
    state.filteredAnime = [];
  } else {
    // Иначе фильтруем аниме по имени на основе текста поиска
    state.currentList = state.anime.filter((anime) => {
      const animeName = anime.name.toLowerCase();
      state.filteredAnime = state.currentList;
      return animeName.includes(state.newSearchAnimeText.toLowerCase());
    });
  }
  // Проверка на пустоту после фильтрации
  if (state.filteredAnime.length === 0) {
    state.hasResults = false; // Пишем, что нет результатов
  } else {
    state.hasResults = true;
  }
};

// Очищаем поисковый запрос и сбрасываем отфильтрованный список на все аниме
export const clearSearchQueryHelper = (state) => {
  state.newSearchAnimeText = ""; // Очищаем текст поискового запроса
  state.filteredAnime = state.anime; // Сбрасываем отфильтрованный список на все аниме
};

// Переключаем аниме в списке для просмотра (добавляем или удаляем)
export const toggleWatchListHelper = (state, action) => {
  const anime = action.payload.animeObj; // Получаем объект аниме из payload
  const index = state.watchList.findIndex((item) => item.id === anime.id); // Находим индекс аниме в списке

  if (index !== -1) {
    // Если аниме уже существует в списке, удаляем его
    state.watchList = state.watchList.filter((item) => item.id !== anime.id);
    state.currentList = state.currentList.filter(
      (item) => item.id !== anime.id
    );
  } else {
    // Если аниме нет в списке, добавляем его
    state.watchList.push(anime);
  }
};

// Переключаем аниме в списке просмотренных (добавляем или удаляем)
export const toggleWatchedListHelper = (state, action) => {
  const anime = action.payload.animeObj; // Получаем объект аниме из payload
  const index = state.watchedList.findIndex((item) => item.id === anime.id); // Находим индекс аниме в списке

  if (index !== -1) {
    // Если аниме уже существует в списке, удаляем его
    state.watchedList = state.watchedList.filter(
      (item) => item.id !== anime.id
    );
    state.currentList = state.currentList.filter(
      (item) => item.id !== anime.id
    );
  } else {
    // Если аниме нет в списке, добавляем его
    state.watchedList.push(anime);
  }
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
      state.currentList = state.watchList;
      break;
    case ANIME_LIST_TYPES.WATCHED:
      state.currentList = state.watchedList;
      break;
    case ANIME_LIST_TYPES.ALL:
      state.currentList = state.anime;
      break;
    default:
      console.log("not found");
  }
};
