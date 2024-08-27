import Classes from "./ChatWindow.module.css";
import React from "react";

const ChatWindow = (props) => {
  return (
    <section className="chats section">
        <ul className={Classes.list}>
          <li className={Classes.chat}>
            Hello there!
          </li>
          <li className={Classes.chat}>
            How old are you?
          </li>
          <li className={Classes.chat}>
            Have you seen the last episode of Jujutsu K?
          </li>
          <li className={Classes.chat}>
            Bye!
          </li>
          <li className={Classes.chat}>
            Look at at this..
          </li>
          <li className={Classes.chat}>
            Can I call u?
          </li>
          <li className={Classes.chat}>
            Where are u? Are u still here?
          </li>
        </ul>
    </section>
  )
}

export default ChatWindow;
