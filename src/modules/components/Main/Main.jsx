import React from "react";
import {Route, Routes} from "react-router-dom";
import { useSelector } from 'react-redux';
import Profile from "./Profile/Profile";
import Classes from "./Main.module.css"
import Messages from "./Messages/Messages";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Main = () => {
  return (
    <main>
      <div className={Classes.content}>
        <Routes>
          <Route path="/profile"
                 element={<Profile/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/messages/1" element={<Messages/>}/>
        </Routes>
      </div>
    </main>
  );
}

export default Main;
