import React from "react";
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import Classes from "./Main.module.css"
import Messages from "./Messages/Messages";
import Anime from "./Anime/Anime";
import Settings from "./Settings/Settings";
import Feeds from "./Feeds/Feeds";

const Main = () => {
  return (
    <main>
      <div className={Classes.content}>
        <Routes>
          <Route path="/profile"
                 element={<Profile/>}/>
          <Route path="/messages" element={<Messages replace />} />
          <Route path="/messages/:userId" element={<Messages/>}/>
          <Route path="/feeds" element={<Feeds/>}/>
          <Route path="/anime" element={<Anime/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
    </main>
  );
}

export default Main;
