// Константы
import avatars from "../Avatars-src";
import {createSlice} from "@reduxjs/toolkit";

//Базовый state
const initialState = {
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


