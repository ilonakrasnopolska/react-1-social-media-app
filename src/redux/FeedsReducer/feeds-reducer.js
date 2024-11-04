import avatars from "../Avatars-src";
import {createSlice} from "@reduxjs/toolkit";

// Счетчики
let feedIdCounter = 1;

const initialState = {
  feeds: [
    {
      avatar: `${avatars.elonPic}`, name: 'Elon', time: '13:34', feedId: feedIdCounter++,
      content: ` Naruto isn’t just an anime for me—it’s a journey of friendship, resilience, and growth. Watching Naruto
            overcome hardships and stay true to his values, no matter the challenges, inspires me deeply.
            The bonds he builds and the sacrifices he makes for his friends create such a powerful story about loyalty
            and determination.`
    }, {
      avatar: `${avatars.vikkyPic}`, name: 'Vikky', time: '12:24', feedId: feedIdCounter++,
      content: `Have someone seen a new episode of Naruto?`
    }, {
      avatar: `${avatars.sakuraPic}`, name: 'Sakura', time: '12:04', feedId: feedIdCounter++,
      content: `A new chapter of My Hero Academia manga is coming out tomorrow!`
    }, {
      avatar: `${avatars.inoPic}`, name: 'Ino', time: '11:54', feedId: feedIdCounter++,
      content: `Did you hear about the Naruto cafe opening in my town?`
    }, {
      avatar: `${avatars.elonPic}`, name: 'Elon', time: '10:34', feedId: feedIdCounter++,
      content: `I wish I could try the real ramen from Naruto.`
    },
    {
      avatar: `${avatars.sunnyPic}`, name: 'Sunny', time: '10:04', feedId: feedIdCounter++,
      content: `I recommended for reading a new manga called Jujutsu K!`
    },
    {
      avatar: `${avatars.markPic}`, name: 'Mark', time: '09:04', feedId: feedIdCounter++,
      content: `A new chapter of Jujutsu K manga is coming out tomorrow!`
    },
  ],
}

const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    filterFeeds: (state) => {
      console.log(state)
    }
  }
})

export const {
  filterFeeds
} = feedsSlice.actions;


export default feedsSlice.reducer;
