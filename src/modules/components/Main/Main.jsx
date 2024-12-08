import React from "react";
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import Classes from "./Main.module.css"
import Messages from "./Messages/Messages";
import Anime from "./Anime/Anime";
import WatchAnime from "./Anime/AnimeList/AnimeItem/WatchAnime/WatchAnime";
import Settings from "./Settings/Settings";
import Feeds from "./Feeds/Feeds";
import LogIn from "./Settings/SettingsOptions /LogOut/LogIn/LogIn";

const Main = () => {
  return (
    <main>
      <div className={Classes.content}>
        <Routes>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/messages/:userId?" element={<Messages/>}/>
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
