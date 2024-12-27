import React from "react";
import {Route, Routes} from "react-router-dom";
import Classes from "./Main.module.css"
import Profile from "./Profile/Profile";
import Feeds from "./Feeds/Feeds";
import Anime from "./Anime/Anime";
import WatchAnime from "./Anime/AnimeList/AnimeItem/WatchAnime/WatchAnime";
import Settings from "./Settings/Settings";
import LogIn from "../Main/Settings/SettingsOptions /LogOut/LogIn/LogIn";
import MessagesContainer from "./Messages/MessagesContainer";
import FriendsPage from "./FriendsPage/FriendsPage"

const Main = ({t}) => {
  return (
    <main>
      <div className={Classes.content}>
        <Routes>
          <Route path="/profile" element={<Profile t={t}/>}/>
          <Route path="/messages/:chatId?" element={<MessagesContainer t={t}/>}/>
          <Route path="/feeds" element={<Feeds t={t}/>}/>
          <Route path="/anime" element={<Anime t={t}/>}/>
          <Route path="/anime/:animeId" element={<WatchAnime t={t} />} />
          <Route path="/settings/:id?" element={<Settings t={t} />} />
          <Route path="/logIn" element={<LogIn t={t} />} />
          <Route path="/friends" element={<FriendsPage t={t} />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
