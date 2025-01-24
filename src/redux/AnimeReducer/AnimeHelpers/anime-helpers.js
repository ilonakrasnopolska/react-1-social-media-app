export const setAnimeListHelper = (state, action) => {
  state.anime = action.payload;
  state.filteredAnime = action.payload;
};

export const updateSearchAnimeTextHelper = (state, action) => {
  state.newSearchAnimeText = action.payload;
};

export const filterAnimeListHelper = (state, language) => {
  if (state.newSearchAnimeText === '') {
    state.filteredAnime = state.anime;
  } else {
    state.filteredAnime = state.anime.filter((anime) => {
      const animeName = anime.name[language] || '';
      return animeName.toLowerCase().includes(state.newSearchAnimeText.toLowerCase());
    });
  }
};

export const clearSearchQueryHelper = (state) => {
  state.newSearchAnimeText = '';
  state.filteredAnime = state.anime;
}
