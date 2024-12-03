import React from "react";
import {useDispatch} from "react-redux";
import {CommentIcon} from "../../../../../../../redux/Assets/SVG-icons";
import Classes from "./Reactions.module.css"
import {handleLike, toggleComments} from "../../../../../../../redux/ProfileReducer/profile-reducer";


const Reactions = ({post}) => {
  const dispatch = useDispatch();
  const {postId, comments = 0, likes = 0, likedByUser = false} = post;
  const likeButtonClass = likedByUser ? `${Classes.btn__like} ${Classes.liked}` : Classes.btn__like;

  return (
    <div className={Classes.btn__box}>
      <div className={Classes.btn__comment}>
        <button onClick={() => dispatch(toggleComments(postId))}
                className={Classes.btn__commentSvg}>
          <CommentIcon/>
        </button>
        <span className={Classes.btn__commentCount}>
          {comments}
        </span>
      </div>
      <div className={Classes.btn__likeBox}>
        <button onClick={() => dispatch(handleLike(postId))}
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
