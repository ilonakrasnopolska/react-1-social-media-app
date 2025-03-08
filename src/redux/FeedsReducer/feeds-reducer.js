import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {FEEDS_LIST_TITLE} from "../../constants/constants"
import {
  setFeedsListHelpers,
  filterFeedsHelpers,
  setActiveCategoryHelpers,
} from "./FeedsHelpers/feeds-helpers";

const initialState = {
  categories: [
    {
      title: FEEDS_LIST_TITLE.TRENDS,
      id: uuidv4(),
    },
    {
      title: FEEDS_LIST_TITLE.MANGA,
      id: uuidv4(),
    },
    {
      title: FEEDS_LIST_TITLE.FANS,
      id: uuidv4(),
    },
    {
      title: FEEDS_LIST_TITLE.NEWS,
      id: uuidv4(),
    },
    {
      title: FEEDS_LIST_TITLE.VIEW_ALL,
      id: uuidv4(),
    },
  ],
  feeds: [],
  filteredFeeds: [],
  activeCategory: FEEDS_LIST_TITLE.VIEW_ALL,
};

const feedsSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {
    setFeedsList: (state, action) => {
      setFeedsListHelpers(state, action);
    },
    filterFeeds: (state, action) => {
      filterFeedsHelpers(state, action);
    },
    setActiveCategory: (state, action) => {
      setActiveCategoryHelpers(state, action);
    },
  },
});

export const { setFeedsList, filterFeeds, setActiveCategory } =
  feedsSlice.actions;

export default feedsSlice.reducer;
