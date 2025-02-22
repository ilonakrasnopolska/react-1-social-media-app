// Константы
import avatars from "../../assets/Avatars-src";
import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

//Базовый state
const initialState = {
  nav: [
    {
      name: "Profile",
      url: "/profile",
      id: uuidv4(),
    },
    {
      name: "Messages",
      url: "/messages",
      id: uuidv4(),
    },
    {
      name: "Feeds",
      url: "/feeds",
      id: uuidv4(),
    },
    {
      name: "Anime",
      url: "/anime",
      id: uuidv4(),
    },
    {
      name: "Settings",
      url: "/settings",
      id: uuidv4(),
    },
  ],
  findFriends: {
    name: "FindFriends",
    url: "/find_friends",
    id: uuidv4(),
  },
  friends: [
    {name: 'Sunny', userId: uuidv4(), avatar: `${avatars.sunnyPic}`},
    {name: 'Phillip', userId: uuidv4(), avatar: `${avatars.phillipPic}`},
    {name: 'Elon', userId: uuidv4(), avatar: `${avatars.elonPic}`},
  ]
}

const sidebarSlice = createSlice({
  name: "sidebar",
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


