import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {CommentIcon} from "../../../../../../../redux/Assets/SVG-icons";
import Classes from "./Reactions.module.css"
import {handleLike, toggleComments} from "../../../../../../../redux/ProfileReducer/profile-reducer";


const Reactions = ({toggleCommentsOpen, postId}) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.profile.posts.find(post => post.postId === postId));

  const comments = post?.comments || 0;
  const likes = post?.likes || 0;
  const likedByUser = post?.likedByUser || false;

  const likeButtonClass = likedByUser ? `${Classes.btn__like} ${Classes.liked}` : Classes.btn__like;

  const handleToggleComments = () => {
    dispatch(toggleComments(postId));
    toggleCommentsOpen()
  };

  const handleLikeToPost = (postId) => {
    dispatch(handleLike(postId));
  }

  return (
    <div className={Classes.btn__box}>
      <div className={Classes.btn__comment}>
        <button onClick={handleToggleComments} className={Classes.btn__commentSvg}>
          <CommentIcon/>
        </button>
        <span className={Classes.btn__commentCount}>
          {comments}
        </span>
      </div>
      <div className={Classes.btn__likeBox}>
        <button onClick={() => handleLikeToPost(postId)} className={likeButtonClass}>
          <span className={Classes.btn__likeSvg}></span>
        </button>
        <span className={Classes.btn__likeCount}>
          {likes}
        </span>
      </div>

    </div>
  );
}

export default Reactions;
