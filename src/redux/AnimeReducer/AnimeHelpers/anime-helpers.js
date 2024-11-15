export const updateSearchAnimeTextHelper = (state, action) => {
  state.newSearchAnimeText = action.payload;
};

export const filterAnimeListHelper = (state) => {
  if (state.newSearchAnimeText === '') {
    state.filteredAnime = state.anime;
  } else {
    state.filteredAnime = state.anime.filter(anime =>
      anime.name.toLowerCase().includes(state.newSearchAnimeText.toLowerCase())
    );
  }
};
