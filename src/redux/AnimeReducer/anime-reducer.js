import {createSlice} from "@reduxjs/toolkit";
import {setAnimeListHelper,
  updateSearchAnimeTextHelper,
  filterAnimeListHelper,
  clearSearchQueryHelper} from "./AnimeHelpers/anime-helpers";


const initialState = {
  anime: [],
  newSearchAnimeText: '',
  filteredAnime: [],
}

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setAnimeList: (state, action) => {
      setAnimeListHelper(state, action)
    },
    setSearchQuery: (state, action) => {
      updateSearchAnimeTextHelper(state, action);
      filterAnimeListHelper(state);
    },
    clearSearchQuery: (state) => {
      clearSearchQueryHelper(state);
    },
  }
})

export const {
  setAnimeList,
  setSearchQuery,
  clearSearchQuery
} = animeSlice.actions;


export default animeSlice.reducer;
