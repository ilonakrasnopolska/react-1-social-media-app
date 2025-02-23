import { current } from "@reduxjs/toolkit";

export const setAnimeListHelper = (state, action) => {
  state.anime = action.payload;
  state.filteredAnime = action.payload;
};

export const updateSearchAnimeTextHelper = (state, action) => {
  state.newSearchAnimeText = action.payload.text;
};

export const filterAnimeListHelper = (state) => {
  if (state.newSearchAnimeText === '') {
    state.filteredAnime = state.anime;
  } else {
    state.filteredAnime = state.anime.filter((anime) => {
      const animeName = anime.name.toLowerCase();
      return animeName.includes(state.newSearchAnimeText.toLowerCase());
    });
  }
};

export const clearSearchQueryHelper = (state) => {
  state.newSearchAnimeText = '';
  state.filteredAnime = state.anime;
}

export const toggleWatchListHelper = (state, action) => {
  const anime = action.payload.animeObj;
  const index = state.watchList.findIndex(item => item.id === anime.id);

  if (index !== -1) {
    state.watchList.splice(index, 1);
  } else {
    state.watchList.push(anime);
  }
  console.log(current(state))
};

export const toggleWatchedListHelper = (state, action) => {
  const anime = action.payload.animeObj;
  const index = state.watchedList.findIndex(item => item.id === anime.id);

  if (index !== -1) {
    state.watchedList.splice(index, 1);
  } else {
    state.watchedList.push(anime);
  }
  console.log(current(state))
};
