import { createSlice } from "@reduxjs/toolkit";
import {
  setAnimeListHelper,
  updateSearchAnimeTextHelper,
  filterAnimeListHelper,
  clearSearchQueryHelper,
  toggleWatchListHelper,
  toggleWatchedListHelper,
  setRatingHelper,
  showAnimeListHelper
} from "./AnimeHelpers/anime-helpers";

const initialState = {
  anime: [],
  watchList: [],
  watchedList: [],
  newSearchAnimeText: "",
  filteredAnime: [],
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    setAnimeList: (state, action) => {
      setAnimeListHelper(state, action);
    },
    setSearchQuery: (state, action) => {
      updateSearchAnimeTextHelper(state, action);
      filterAnimeListHelper(state);
    },
    clearSearchQuery: (state) => {
      clearSearchQueryHelper(state);
    },
    toggleWatchList: (state, action) => {
      toggleWatchListHelper(state, action);
    },
    toggleWatchedList: (state, action) => {
      toggleWatchedListHelper(state, action);
    },
    setRating: (state, action) => {
      setRatingHelper(state, action);
    },
    showAnimeList: (state, action) => {
      showAnimeListHelper(state, action);
    }
  },
});

export const {
  setAnimeList,
  setSearchQuery,
  clearSearchQuery,
  toggleWatchList,
  toggleWatchedList,
  setRating,
  showAnimeList
} = animeSlice.actions;

export default animeSlice.reducer;
