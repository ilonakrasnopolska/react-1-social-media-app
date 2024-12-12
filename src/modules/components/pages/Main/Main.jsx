import React from "react";
import {Route, Routes} from "react-router-dom";
import Classes from "./Main.module.css"
import Profile from "./Profile/Profile";
import Feeds from "./Feeds/Feeds";
import Anime from "./Anime/Anime";
import WatchAnime from "./Anime/AnimeList/AnimeItem/WatchAnime/WatchAnime";
import Settings from "./Settings/Settings";
import LogIn from "../Main/Settings/SettingsOptions /LogOut/LogIn/LogIn";
import MessagesContainer from "./MessagesContainer/MessagesContainer";

const Main = () => {
  return (
    <main>
      <div className={Classes.content}>
        <Routes>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/messages/:chatId?" element={<MessagesContainer/>}/>
          <Route path="/feeds" element={<Feeds/>}/>
          <Route path="/anime" element={<Anime/>}/>
          <Route path="/anime/:animeId" element={<WatchAnime />} />
          <Route path="/settings/:id?" element={<Settings />} />
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
