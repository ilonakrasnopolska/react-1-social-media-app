import Classes from "./Dialogs.module.css";
import React from "react";
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {
  let messagesElements = props.messages.map(el =>
    <Dialog message={el.message} data={el.data} key={el.id} avatar={el.avatar} />)
  return (
    <section className="dialogs section">
        <ul className={Classes.list}>
          {messagesElements}
        </ul>
    </section>
  )
}

export default Dialogs;
