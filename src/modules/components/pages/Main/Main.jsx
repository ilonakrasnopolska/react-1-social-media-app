import React from "react";
import {Route, Routes} from "react-router-dom";
import Classes from "./Main.module.css"
import ProfileContainer from "./Profile/ProfileContainer";
import FeedsContainer from "./Feeds/FeedsContainer";
import AnimeContainer from "./Anime/AnimeContainer";
import WatchAnimeContainer from "./Anime/AnimeList/AnimeItem//WatchAnime/WatchAnimeContainer";
import SettingsContainer from ".//Settings/SettingsContainer";
import LogIn from "../Main/Settings/SettingsOptions /LogOut/LogIn/LogIn";
import MessagesContainer from "./Messages/MessagesContainer";
import FindFriendsContainer from "./FindFriends/FindFriendsContainer"

const Main = ({t}) => {
  return (
    <main>
      <div className={Classes.content}>
        <Routes>
          <Route path="/profile" element={<ProfileContainer t={t}/>}/>
          <Route path="/messages/:userId?" element={<MessagesContainer t={t}/>}/>
          <Route path="/feeds" element={<FeedsContainer t={t}/>}/>
          <Route path="/anime" element={<AnimeContainer t={t}/>}/>
          <Route path="/anime/:animeId" element={<WatchAnimeContainer t={t} />} />
          <Route path="/settings/:id?" element={<SettingsContainer t={t} />} />
          <Route path="/logIn" element={<LogIn t={t} />} />
          <Route path="/find_friends" element={<FindFriendsContainer t={t} />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
