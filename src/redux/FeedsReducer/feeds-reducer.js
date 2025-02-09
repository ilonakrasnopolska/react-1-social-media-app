import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import {setFeedsListHelpers ,filterFeedsHelpers, setActiveCategoryHelpers} from "./FeedsHelpers/feeds-helpers";


const initialState = {
 categories: [
    {
      title: 'Trends', id: uuidv4() ,
    },
    {
      title: 'Manga', id: uuidv4() ,
    },
    {
      title: 'Fans', id: uuidv4() ,
    },
    {
      title: 'News', id: uuidv4() ,
    },
    {
      title: 'View All', id: uuidv4() ,
    },
  ],
  feeds: [],
  filteredFeeds: [],
  activeCategory: 'View All',
}


const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    setFeedsList: (state, action) => {
      setFeedsListHelpers(state, action)
    },
    filterFeeds: (state, action) => {
      filterFeedsHelpers(state, action)
    },
    setActiveCategory: (state, action) => {
      setActiveCategoryHelpers(state, action)
    },
  }
})

export const {
  setFeedsList, filterFeeds, setActiveCategory
} = feedsSlice.actions;


export default feedsSlice.reducer;
