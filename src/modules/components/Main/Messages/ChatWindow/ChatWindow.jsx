import Classes from "./ChatWindow.module.css";
import React from "react";
import Chat from "./Chat/Chat";

const ChatWindow = () => {
  return (
    <section className="chats section">
        <ul className={Classes.list}>
          <Chat message="Hello there!" data="17:28"/>
          <Chat message="How old are you?" data="16:00"/>
          <Chat message="Have you seen the last episode of Jujutsu K?" data="13:00"/>
          <Chat message="Bye!" data="Thu"/>
          <Chat message="Look at at this.." data="Wed"/>
          <Chat message="Can I call u?" data="Mon"/>
          <Chat message="Where are u? Are u still here?" data="Mon"/>
        </ul>
    </section>
  )
}

export default ChatWindow;
