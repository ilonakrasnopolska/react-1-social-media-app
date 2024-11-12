// Константы
import avatars from "../Assets/Avatars-src";
import {createSlice} from "@reduxjs/toolkit";

//Базовый state
const initialState = {
  nav: [
    {
      name: "Profile",
      url: "/profile",
      id: 1,
    },
    {
      name: "Messages",
      url: "/messages",
      id: 2,
    },
    {
      name: "Feeds",
      url: "/feeds",
      id: 3,
    },
    {
      name: "Anime",
      url: "/anime",
      id: 4,
    },
    {
      name: "Settings",
      url: "/settings",
      id: 5,
    },
  ],
  friends: [
    {name: 'Sunny', friendId: 1, avatar: `${avatars.sunnyPic}`},
    {name: 'Phillip', friendId: 2, avatar: `${avatars.phillipPic}`},
    {name: 'Elon', friendId: 3, avatar: `${avatars.elonPic}`},
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


