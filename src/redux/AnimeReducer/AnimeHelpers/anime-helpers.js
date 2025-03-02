import { current } from "@reduxjs/toolkit";

export const setAnimeListHelper = (state, action) => {
  state.anime = action.payload;
  state.filteredAnime = action.payload;
};

export const updateSearchAnimeTextHelper = (state, action) => {
  state.newSearchAnimeText = action.payload.text;
};

export const filterAnimeListHelper = (state) => {
  if (state.newSearchAnimeText === "") {
    state.filteredAnime = state.anime;
  } else {
    state.filteredAnime = state.anime.filter((anime) => {
      const animeName = anime.name.toLowerCase();
      return animeName.includes(state.newSearchAnimeText.toLowerCase());
    });
  }
};

export const clearSearchQueryHelper = (state) => {
  state.newSearchAnimeText = "";
  state.filteredAnime = state.anime;
};

export const toggleWatchListHelper = (state, action) => {
  const anime = action.payload.animeObj;
  const index = state.watchList.findIndex((item) => item.id === anime.id);

  if (index !== -1) {
    state.watchList.splice(index, 1);
  } else {
    state.watchList.push(anime);
  }
};

export const toggleWatchedListHelper = (state, action) => {
  const anime = action.payload.animeObj;
  const index = state.watchedList.findIndex((item) => item.id === anime.id);

  if (index !== -1) {
    state.watchedList.splice(index, 1);
  } else {
    state.watchedList.push(anime);
  }
  console.log(current(state));
};

export const setRatingHelper = (state, action) => {
  const rating = action.payload.rating;
  const animeObj = state.anime.find(
    (obj) => obj.id === action.payload.animeObj.id
  );
  if (animeObj) {
    if (animeObj.rating === rating) {
      animeObj.rating = null;
      if (rating === true) {
        animeObj.votes.likes -= 1;  // Уменьшаем лайк
      } else if (rating === false) {
        animeObj.votes.dislikes -= 1;  // Уменьшаем дизлайк
      }
    } else {
      // Если рейтинг изменился, обновляем счетчики
      if (rating === true) {
        animeObj.votes.likes += 1;  // Увеличиваем лайк
        if (animeObj.rating === false) {
          animeObj.votes.dislikes -= 1;  // Уменьшаем дизлайк
        }
      } else if (rating === false) {
        animeObj.votes.dislikes += 1;  // Увеличиваем дизлайк
        if (animeObj.rating === true) {
          animeObj.votes.likes -= 1;  // Уменьшаем лайк
        }
      }
      animeObj.rating = rating;  // Обновляем рейтинг
    }
  }
};

export const showWatchListHelper = (state, action) => {
  console.log(action);
};

export const showWatchedListHelper = (state, action) => {
  console.log(action);
};
