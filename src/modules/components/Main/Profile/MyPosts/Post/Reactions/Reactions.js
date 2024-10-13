import React from "react";
import {CommentIcon} from "../../../../../../../assets/SVG-icons";
import Classes from "./Reactions.module.css"
import {handleLikeActionCreator, toggleCommentsActionCreator} from "../../../../../../../redux/profile-reducer"

const Reactions = (props) => {
  const likeButtonClass = props.isLiked ? `${Classes.btn__like} ${Classes.liked}` : Classes.btn__like;

  const toggleComments = () => {
    props.dispatch(toggleCommentsActionCreator(props.postId));
    props.toggleCommentsOpen()
  };

  const handleLikeToPost = (postId) => {
    props.dispatch(handleLikeActionCreator(postId));
  }

  return (
    <div className={Classes.btn__box}>
      <div className={Classes.btn__comment}>
        <button onClick={toggleComments} className={Classes.btn__commentSvg}>
          <CommentIcon/>
        </button>
        <span className={Classes.btn__commentCount}>
          {props.comments}
        </span>
      </div>
      <div className={Classes.btn__likeBox}>
        <button onClick={() => handleLikeToPost(props.postId)} className={likeButtonClass}>
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
