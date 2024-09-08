import React from "react";
import {CommentIcon} from "../../../../../../../assets/SVG-icons";
import Classes from "./Reactions.module.css"

const Reactions = (props) => {
  return (
    <div className={Classes.btn__box}>
      <div className={Classes.btn__comment}>
        <button className={Classes.btn__commentSvg}>
          <CommentIcon/>
        </button>
        <span className={Classes.btn__commentCount}>
          {props.comments}
        </span>
      </div>
      <div className={Classes.btn__likeBox}>
        <button className={Classes.btn__like}>
          <span className={Classes.btn__likeSvg}></span>
        </button>
        <span className={Classes.btn__likeCount}>
          {props.likes}
        </span>
      </div>
    </div>
  );
}

export default Reactions;
