import { current } from "@reduxjs/toolkit";
import { ANIME_LIST_TYPES } from "../../../constants/constants"

const toggleAnimeInList = (animeList, filteredAnime, action) => {
  const anime = action.payload.animeObj;
  const index = animeList.findIndex((item) => item.id === anime.id);
  const indexFiltered = filteredAnime.findIndex((item) => item.id === anime.id);

  if (index !== -1) {
   animeList.splice(index, 1);
   filteredAnime.splice(indexFiltered, 1);
  } else {
   animeList.push(anime);
  }

}

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
  toggleAnimeInList(state.watchList, state.filteredAnime, action)
};

export const toggleWatchedListHelper = (state, action) => {
  toggleAnimeInList(state.watchedList, state.filteredAnime, action)
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

export const showAnimeListHelper = (state, action) => {
  switch (action.payload.text) {
    case ANIME_LIST_TYPES.WATCH:
      state.filteredAnime = state.watchList
      break;
    case ANIME_LIST_TYPES.WATCHED:
      state.filteredAnime = state.watchedList
      break;
    case ANIME_LIST_TYPES.ALL:
      state.filteredAnime = state.anime
      break;
    default:
      console.log('not found');
  }
};
