import React from "react";
import {Route, Routes} from "react-router-dom";
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
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
        <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
