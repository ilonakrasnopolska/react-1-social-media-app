import { ANIME_LIST_TYPES } from "../../../constants/constants";
// Устанавливаем список аниме и отфильтрованный список
export const setAnimeListHelper = (state, action) => {
  state.currentList = action.payload; //Устанавливаем все аниме в текущий лист
  state.filteredAnime = []; // Очищаем фильтрованный список
  const allAnime = [...state.fullList, ...action.payload.map(anime => ({ ...anime }))];
  const uniqueAnime = allAnime.filter(
    (anime, index, self) => index === self.findIndex((a) => a.id === anime.id)
  );
  state.fullList = uniqueAnime;
};

// Обновляем текст поиска
export const updateSearchAnimeTextHelper = (state, action) => {
  state.newSearchAnimeText = action.payload.text; // Обновляем текст поискового запроса в состоянии
};

// Фильтруем список аниме на основе текста поиска
export const filterAnimeListHelper = (state) => {
  if (state.newSearchAnimeText === "") {
    const savedPage = state.animePages.find(
      (item) => item.page === state.currentPage
    );

    if (savedPage && Array.isArray(savedPage.animeList)) {
      state.currentList = savedPage.animeList;
    } else {
      state.currentList = [];
    }

    state.filteredAnime = [];
    state.pageType = ANIME_LIST_TYPES.ALL;
  } else {
    // Иначе фильтруем аниме по имени на основе текста поиска
    state.filteredAnime = state.fullList.filter((anime) =>
      anime.name.toLowerCase().includes(state.newSearchAnimeText.toLowerCase())
    );
    state.currentList = state.filteredAnime; // Обновляем текущий список
    state.pageType = ANIME_LIST_TYPES.SEARCH;
  }

  state.hasResults = state.filteredAnime.length > 0; // Пишем, что нет результатов
};

// Устанавливаем общее кол-во аниме
export const setTotalAnimeCountHelper = (state, action) => {
  state.totalAnimeCount = action.payload;
};

// Функция для установки текущей страницы
export const setCurrentPageHelper = (state, action) => {
  state.currentPage = action.payload; // Обновляем текущую страницу
  filterAnimeListHelper(state); // Применяем фильтрацию
};

// Функция для установки загруженных страниц
export const setLoadedPageHelper = (state, action) => {
  if (!state.loadedPages.includes(action.payload)) {
    state.loadedPages.push(action.payload); // Добавляем страницу в список
    //добаляем обьекты аниме в массив
    state.animePages.push({
      page: action.payload,
      animeList: state.currentList.map(anime => ({ ...anime })), // копируем каждый объект
    });
  }
};

// Очищаем поисковый запрос и сбрасываем отфильтрованный список на все аниме
export const clearSearchQueryHelper = (state) => {
  state.newSearchAnimeText = ""; // Очищаем текст поискового запроса
  state.filteredAnime = []; // Сбрасываем отфильтрованный список на все аниме
};

// Переключаем аниме в списке для просмотра (добавляем или удаляем)
export const toggleWatchListHelper = (state, action) => {
  const anime = { ...action.payload.animeObj }; // Копируем объект, чтобы избежать мутаций
  const index = state.watchList.findIndex((item) => item.id === anime.id);

  if (index !== -1) {
    state.watchList = state.watchList.filter((item) => item.id !== anime.id);
  } else {
    state.watchList.push({ ...anime });
  }

  // Обновляем currentList, если сейчас мы в режиме WATCH
  if (state.pageType === ANIME_LIST_TYPES.WATCH) {
    state.currentList = [...state.watchList];
  }
};

// Переключаем аниме в списке просмотренных (добавляем или удаляем)
export const toggleWatchedListHelper = (state, action) => {
  const anime = { ...action.payload.animeObj };
  const index = state.watchedList.findIndex((item) => item.id === anime.id);

  if (index !== -1) {
    state.watchedList = state.watchedList.filter(
      (item) => item.id !== anime.id
    );
  } else {
    state.watchedList.push({ ...anime });
  }

  if (state.pageType === ANIME_LIST_TYPES.WATCHED) {
    state.currentList = [...state.watchedList];
  }
};

// Устанавливаем рейтинг для аниме
export const setRatingHelper = (state, action) => {
  const { animeObj, rating } = action.payload;
  const anime = state.fullList.find((obj) => obj.id === animeObj.id);

  if (anime) {
    // Проверка на существование объекта votes
    if (!anime.votes) {
      anime.votes = { likes: 0, dislikes: 0 }; // Если votes нет, создаем его
    }

    if (anime.rating === rating) {
      // Если рейтинг уже такой же, удаляем его
      anime.rating = null;
      if (rating === true) {
        anime.votes.likes -= 1; // Уменьшаем количество лайков
      } else if (rating === false) {
        anime.votes.dislikes -= 1; // Уменьшаем количество дизлайков
      }
    } else {
      // Если рейтинг изменился, обновляем количество голосов
      if (rating === true) {
        anime.votes.likes += 1; // Увеличиваем количество лайков
        if (anime.rating === false) {
          anime.votes.dislikes -= 1; // Уменьшаем дизлайк, если был раньше
        }
      } else if (rating === false) {
        anime.votes.dislikes += 1; // Увеличиваем количество дизлайков
        if (anime.rating === true) {
          anime.votes.likes -= 1; // Уменьшаем лайк, если был раньше
        }
      }
      anime.rating = rating; // Обновляем рейтинг
    }
  }
};

// Фильтруем список аниме в зависимости от типа списка (для просмотра, просмотренные или все)
export const showAnimeListHelper = (state, action) => {
  switch (action.payload.text) {
    case ANIME_LIST_TYPES.WATCH:
      state.currentList = state.watchList;
      state.pageType = ANIME_LIST_TYPES.WATCH;
      break;
    case ANIME_LIST_TYPES.WATCHED:
      state.currentList = state.watchedList;
      state.pageType = ANIME_LIST_TYPES.WATCHED;
      break;
    case ANIME_LIST_TYPES.ALL:
      state.currentList = state.animePages.find(
        (item) => item.page === state.currentPage
      ).animeList;
      state.pageType = ANIME_LIST_TYPES.ALL;
      break;
    default:
      console.log("not found");
  }
};
