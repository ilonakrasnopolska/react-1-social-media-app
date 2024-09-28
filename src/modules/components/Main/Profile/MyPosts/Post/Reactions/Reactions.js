import React from "react";
import {CommentIcon} from "../../../../../../../assets/SVG-icons";
import Classes from "./Reactions.module.css"
import {handleLikeActionCreator} from "../../../../../../../redux/state"

const Reactions = (props) => {
  const likeButtonClass = props.isLiked ? `${Classes.btn__like} ${Classes.liked}` : Classes.btn__like;

  let readComments = () => {
    console.log('popka')
  }

  let handleLikeToPost = (id) => {
    props.dispatch(handleLikeActionCreator(id))
  }

  return (
    <div className={Classes.btn__box}>
      <div className={Classes.btn__comment}>
        <button onClick={readComments} className={Classes.btn__commentSvg}>
          <CommentIcon/>
        </button>
        <span className={Classes.btn__commentCount}>
          {props.comments}
        </span>
      </div>
      <div className={Classes.btn__likeBox}>
        <button onClick={() => handleLikeToPost(props.id)} className={likeButtonClass}>
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
