import React from "react";
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import Classes from "./Main.module.css"
import Messages from "./Messages/Messages";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import ChatWindow from "./Messages/ChatWindow/ChatWindow";

const Main = (props) => {
  return (
    <main>
      <div className={Classes.content}>
        <Routes>
          <Route path="/profile"
                 element={<Profile profile={props.state.profilePage} dispatch={props.dispatch}/>}/>
          <Route path="/messages" element={<Messages dialogs={props.state.dialogsPage} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/messages/1" element={<ChatWindow state={props.state} />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
