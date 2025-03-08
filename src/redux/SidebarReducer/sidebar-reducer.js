// Константы
import avatars from "../../assets/Avatars-src";
import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import {NAV_LIST_NAME, NAV_LIST_URL} from "../../constants/constants"

//Базовый state
const initialState = {
  nav: [
    {
      name: NAV_LIST_NAME.PROFILE,
      url: NAV_LIST_URL.PROFILE,
      id: uuidv4(),
    },
    {
      name: NAV_LIST_NAME.MESSAGES,
      url: NAV_LIST_URL.MESSAGES,
      id: uuidv4(),
    },
    {
      name: NAV_LIST_NAME.FEEDS,
      url: NAV_LIST_URL.FEEDS,
      id: uuidv4(),
    },
    {
      name: NAV_LIST_NAME.ANIME,
      url: NAV_LIST_URL.ANIME,
      id: uuidv4(),
    },
    {
      name: NAV_LIST_NAME.SETTINGS,
      url: NAV_LIST_URL.SETTINGS,
      id: uuidv4(),
    },
  ],
  findFriends: {
    name: NAV_LIST_NAME.FIND_FRIENDS,
    url: NAV_LIST_URL.FIND_FRIENDS,
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


