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
