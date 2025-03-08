import { createSlice } from "@reduxjs/toolkit";
import {
  setUsersListHelper,
  updateSearchNewFriendTextHelper,
  followHelper,
  unFollowHelper,
  filterUsersListHelper,
  clearSearchQueryHelper,
} from "./FindFriendsHelpers/find-friends-helpers";

//Базовый state
const initialState = {
  friends: [],
  searchNewFriendText: "",
  filteredFriends: [],
};

const sidebarSlice = createSlice({
  name: "findFriends",
  initialState,
  reducers: {
    setUsersList: (state, action) => {
      setUsersListHelper(state, action);
    },
    setSearchQuery: (state, action) => {
      updateSearchNewFriendTextHelper(state, action);
      filterUsersListHelper(state);
    },
    clearSearchQuery: (state) => {
      clearSearchQueryHelper(state);
    },
    follow: (state, action) => {
      followHelper(state, action);
    },
    unFollow: (state, action) => {
      unFollowHelper(state, action);
    },
  },
});

export const {
  setUsersList,
  setSearchQuery,
  clearSearchQuery,
  follow,
  unFollow,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
