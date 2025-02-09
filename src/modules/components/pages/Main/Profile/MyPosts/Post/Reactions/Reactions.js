import React from "react";
import {CommentIcon} from "../../../../../../../../assets/SVG-icons";
import Classes from "./Reactions.module.css"


const Reactions = ({comments, likes, likeButtonClass, onLike, onComment}) => {
  return (
    <div className={Classes.btn__box}>
      <div className={Classes.btn__comment}>
        <button onClick={onComment}
                className={Classes.btn__commentSvg}>
          <CommentIcon/>
        </button>
        <span className={Classes.btn__commentCount}>
          {comments}
        </span>
      </div>
      <div className={Classes.btn__likeBox}>
        <button onClick={onLike}
                className={likeButtonClass}>
          <span className={Classes.btn__likeSvg}>
          </span>
        </button>
        <span className={Classes.btn__likeCount}>
          {likes}
        </span>
      </div>

    </div>
  );
}

export default Reactions;
