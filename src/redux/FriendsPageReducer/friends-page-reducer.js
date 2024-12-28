// Константы
import avatars from "../assets/Avatars-src";
import {createSlice} from "@reduxjs/toolkit";

const baseMessageUrl = '/messages/';
let friendIdCounter = 1

//Базовый state
const initialState = {
  friends: [
    {name: {en:'Mark', ru:'Марк'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`, avatar: `${avatars.markPic}`},
    {name: {en:'Vikky', ru:'Викки'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`, avatar: `${avatars.vikkyPic}`},
    {name: {en:'Sunny', ru:'Санни'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`, avatar: `${avatars.sunnyPic}`},
    {name: {en:'Phillip', ru:'Филипп'},userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`,avatar: `${avatars.phillipPic}`},
    {name: {en:'Elon', ru:'Илон'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`, avatar: `${avatars.elonPic}`},
    {name: {en:'Sakura', ru:'Сакура'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`, avatar: `${avatars.sakuraPic}`},
    {name: {en:'Ino', ru:'Ино'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`, avatar: `${avatars.inoPic}`},
    {name: {en:'Violet', ru:'Виолетта'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`, avatar: `${avatars.violetPic}`},
    {name: {en:'Anna', ru:'Анна'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`, avatar: `${avatars.annaPic}`},
    {name: {en:'Artur', ru:'Артур'}, userId: friendIdCounter, url: `${baseMessageUrl}${friendIdCounter++}`, avatar: `${avatars.arturPic}`},
  ]
}

const sidebarSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    showFriends: (state) => {
      console.log(state)
    },
  }
})

export const {
  showFriends
} = sidebarSlice.actions;

export default sidebarSlice.reducer;


