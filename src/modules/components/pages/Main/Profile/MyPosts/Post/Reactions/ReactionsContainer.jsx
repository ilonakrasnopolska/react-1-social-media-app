import React from "react";
import { useDispatch } from "react-redux";
import Reactions from "./Reactions";
import Classes from "./Reactions.module.css"
import {handleLike, toggleComments} from "../../../../../../../../redux/ProfileReducer/profile-reducer";


const ReactionsContainer = ({post}) => {
  const dispatch = useDispatch();
  const {postId, comments = 0, likes = 0, likedByUser = false} = post;
  const likeButtonClass = likedByUser ? `${Classes.btn__like} ${Classes.liked}` : Classes.btn__like;

  const onLike = () => dispatch(handleLike(postId));
  const onComment = () => dispatch(toggleComments(postId));

  return (
    <Reactions postId={postId} comments={comments}
    likes={likes} likeButtonClass={likeButtonClass} onLike={onLike} onComment={onComment}/>
  );
};

export default ReactionsContainer;
