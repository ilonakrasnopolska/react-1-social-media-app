import Classes from "./NewMessage.module.css";
import React from "react";
import {SendMessage} from "../../../../../../assets/SVG-icons";

const NewMessage = (props) => {
  return (
    <div className={Classes.container}>
      <form className={Classes.form}>
        <textarea className={Classes.textarea} placeholder="Type your message here..." />
        <button className={Classes.button} type="submit">
          <SendMessage />
        </button>
      </form>
    </div>
  )
}

export default NewMessage;
