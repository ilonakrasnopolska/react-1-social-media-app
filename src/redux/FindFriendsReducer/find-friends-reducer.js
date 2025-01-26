import avatars from "../assets/Avatars-src";
import {createSlice} from "@reduxjs/toolkit";
import {setUsersListHelper,
  updateSearchNewFriendTextHelper,
  followHelper,
  unFollowHelper,
  filterUsersListHelper,
  clearSearchQueryHelper} from "./FindFriendsHelpers/find-friends-helpers"

const baseMessageUrl = '/messages/';
let friendIdCounter = 1

//Базовый state
const initialState = {
//   friends: [
//     {name: {en:'Mark', ru:'Марк'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`,
//     avatar: `${avatars.markPic}`, isFollow: true, status: 'Sleeping...', city: 'London'},
//     {name: {en:'Vikky', ru:'Викки'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`,
//     avatar: `${avatars.vikkyPic}`, isFollow: true, status: 'Hi, friends!', city: 'Moscow'},
//     {name: {en:'Sunny', ru:'Санни'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`,
//     avatar: `${avatars.sunnyPic}`, isFollow: true, status: 'Follow me)', city: 'Haifa'},
//     {name: {en:'Phillip', ru:'Филипп'},userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`,
//     avatar: `${avatars.phillipPic}`, isFollow: true, status: 'I am crazy about Naruto', city: 'Kiev'},
//     {name: {en:'Elon', ru:'Илон'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`,
//     avatar: `${avatars.elonPic}`, isFollow: true, status: 'I want some ice-cream', city: 'Minsk'},
//     {name: {en:'Sakura', ru:'Сакура'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`,
//     avatar: `${avatars.sakuraPic}`, isFollow: true, status: 'Give me, give me, give me some more..)', city: 'Paris'},
//     {name: {en:'Ino', ru:'Ино'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`,
//     avatar: `${avatars.inoPic}`, isFollow: true, status: 'Love my cat.', city: 'London'},
//     {name: {en:'Artur', ru:'Артур'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`,
//     avatar: `${avatars.arturPic}`, isFollow: true, status: 'Listen to your heart', city: 'London'},
//   ],
//   allUsers: [
//   {name: {en:'Violet', ru:'Виолетта'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`,
//   avatar: `${avatars.violetPic}`, isFollow: false, status: 'Wanna some beer?', city: 'New York'},
//   {name: {en:'Anna', ru:'Анна'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`,
//   avatar: `${avatars.annaPic}`, isFollow: false, status: 'At work(', city: 'Haifa'},
// ],
  friends: [],
  allUsers: [],
  searchNewFriendText: '',
  filteredFriends: [],
}

initialState.allUsers = [...initialState.friends, ...initialState.allUsers];
initialState.filteredFriends = initialState.friends;

const sidebarSlice = createSlice({
  name: "findFriends",
  initialState,
  reducers: {
    setUsersList: (state, action) => {
      setUsersListHelper(state, action)
    },
    setSearchQuery: (state, action) => {
      const { text, language } = action.payload;
      updateSearchNewFriendTextHelper(state, { payload: text });
      filterUsersListHelper(state, language);
    },
    clearSearchQuery: (state) => {
      clearSearchQueryHelper(state);
    },
    follow: (state, action) => {
      followHelper(state, action)
    },
    unFollow: (state, action) => {
      unFollowHelper(state, action)
    },
  }
})

export const {
  setUsersList,
  setSearchQuery,
  clearSearchQuery,
  follow,
  unFollow
} = sidebarSlice.actions;

export default sidebarSlice.reducer;


