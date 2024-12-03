import avatars from "../Assets/Avatars-src";
import {createSlice} from "@reduxjs/toolkit";
import {filterFeedsHelpers, setActiveCategoryHelpers} from "./FeedsHelpers/feeds-helpers";
import posters from "../Assets/Posters-src";

// Счетчики
let feedIdCounter = 1;
let categoriesIdCounter = 1;

const initialState = {
  feeds: [
    {
      avatar: `${avatars.elonPic}`, name: 'Elon', category: 'Fans', time: '13:34', feedId: feedIdCounter++,
      content: ` Naruto isn’t just an anime for me—it’s a journey of friendship, resilience, and growth. Watching Naruto
            overcome hardships and stay true to his values, no matter the challenges, inspires me deeply.
            The bonds he builds and the sacrifices he makes for his friends create such a powerful story about loyalty
            and determination.`
    }, {
      avatar: `${avatars.vikkyPic}`, name: 'Vikky', category: 'Trends', time: '12:24', feedId: feedIdCounter++,
      content: `Have someone seen a new episode of Naruto?`
    }, {
      avatar: `${avatars.sakuraPic}`, name: 'Sakura', category: 'Manga', time: '12:04', feedId: feedIdCounter++,
      content: `A new chapter of My Hero Academia manga is coming out tomorrow!`, poster: `${posters.MyHeroAcademia}`,
    }, {
      avatar: `${avatars.aniHub}`, name: 'AniHub', category: 'News', time: '11:54', feedId: feedIdCounter++,
      content: `Did you hear about the Naruto cafe opening?`
    }, {
      avatar: `${avatars.elonPic}`, name: 'Elon', category: 'Fans', time: '10:34', feedId: feedIdCounter++,
      content: `I wish I could try the real ramen from Naruto.`
    },
    {
      avatar: `${avatars.sunnyPic}`, name: 'Sunny', category: 'Manga', time: '10:04', feedId: feedIdCounter++,
      content: `I recommended for reading a new manga called Jujutsu K!` , poster: `${posters.JujutsuKaisen}`,
    },
    {
      avatar: `${avatars.markPic}`, name: 'Mark', category: 'Manga', time: '09:04', feedId: feedIdCounter++,
      content: `A new chapter of Jujutsu K manga is coming out tomorrow!`, poster: `${posters.JujutsuKaisen}`,
    },
  ],
  categories: [
    {
      title: 'Trends', id: categoriesIdCounter++ ,
    },
    {
      title: 'Manga', id: categoriesIdCounter++ ,
    },
    {
      title: 'Fans', id: categoriesIdCounter++ ,
    },
    {
      title: 'News', id: categoriesIdCounter++ ,
    },
    {
      title: 'View all', id: categoriesIdCounter++ ,
    },
  ],
  filteredFeeds: [],
  activeCategory: 'View all',
}


const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    filterFeeds: (state, action) => {
      filterFeedsHelpers(state, action)
    },
    setActiveCategory: (state, action) => {
      setActiveCategoryHelpers(state, action)
    },
  }
})

export const {
  filterFeeds, setActiveCategory
} = feedsSlice.actions;


export default feedsSlice.reducer;
