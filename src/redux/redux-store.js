import { configureStore } from '@reduxjs/toolkit'
import profileReducer from "./ProfileReducer/profile-reducer";
import dialogsReducer from "./DialogsReducer/dialogs-reducer";
import sidebarReducer from "./SidebarReducer/sidebar-reducer";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
  },
})
