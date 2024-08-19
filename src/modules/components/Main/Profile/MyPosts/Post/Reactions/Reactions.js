import React from "react";
import {CommentIcon} from "../../../../../../helpers/SVG-icons";
import Classes from "./Reactions.module.css"

const Reactions = () => {
  return (
    <div className={Classes.btnBox}>
      <button className={Classes.btnComment}>
        <CommentIcon />
      </button>
      <button className={Classes.btnLike}></button>
    </div>
  );
}

export default Reactions;
