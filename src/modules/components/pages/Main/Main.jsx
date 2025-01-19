import React from "react";
import {Route, Routes} from "react-router-dom";
import Classes from "./Main.module.css"
import ProfileContainer from "./Profile/ProfileContainer";
import FeedsContainer from "./Feeds/FeedsContainer";
import AnimeContainer from "./Anime/AnimeContainer";
import WatchAnime from "./Anime/AnimeList/AnimeItem/WatchAnime/WatchAnime";
import Settings from "./Settings/Settings";
import LogIn from "../Main/Settings/SettingsOptions /LogOut/LogIn/LogIn";
import MessagesContainer from "./Messages/MessagesContainer";
import FindFriendsContainer from "./FindFriends/FindFriendsContainer"

const Main = ({t}) => {
  return (
    <main>
      <div className={Classes.content}>
        <Routes>
          <Route path="/profile" element={<ProfileContainer t={t}/>}/>
          <Route path="/messages/:chatId?" element={<MessagesContainer t={t}/>}/>
          <Route path="/feeds" element={<FeedsContainer t={t}/>}/>
          <Route path="/anime" element={<AnimeContainer t={t}/>}/>
          <Route path="/anime/:animeId" element={<WatchAnime t={t} />} />
          <Route path="/settings/:id?" element={<Settings t={t} />} />
          <Route path="/logIn" element={<LogIn t={t} />} />
          <Route path="/find_friends" element={<FindFriendsContainer t={t} />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
