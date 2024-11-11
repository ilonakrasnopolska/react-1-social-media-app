import { configureStore } from '@reduxjs/toolkit'
import profileReducer from "./ProfileReducer/profile-reducer";
import dialogsReducer from "./DialogsReducer/dialogs-reducer";
import sidebarReducer from "./SidebarReducer/sidebar-reducer";
import feedsReducer from "./FeedsReducer/feeds-reducer";
import animeReducer from "./AnimeReducer/anime-reducer";
import settingsReducer from "./SettingsReducer/settings-reducer";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    feeds: feedsReducer,
    anime: animeReducer,
    settings: settingsReducer,
  },
})
