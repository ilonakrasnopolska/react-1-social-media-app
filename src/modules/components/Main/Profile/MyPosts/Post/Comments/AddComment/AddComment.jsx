import React from "react";
import {useSelector, useDispatch} from "react-redux";
import Classes from "./AddComment.module.css"
import {addComment, updateNewCommentText}
  from "../../../../../../../../redux/ProfileReducer/profile-reducer"

const AddComment = ({postId}) => {
  const dispatch = useDispatch();
  const newCommentText = useSelector(state => {
    const post = state.profile.posts.find(p => p.postId === postId);
    return post ? post.newCommentText : '';
  });
  const handleAddComment = (event) => {
    event.preventDefault();
    dispatch(addComment({postId}));
  };

  const onCommentChange = (e) => {
    const value = e.target.value;
    dispatch(updateNewCommentText({postId, value}));
  }

  return (
    <div className={Classes.add_comment}>
      <form className={Classes.comment_form}>
        <textarea
          value={newCommentText}
          onChange={onCommentChange}
          className={Classes.comment_input}
          placeholder="Add a comment..."/>
        <button onClick={handleAddComment} className={Classes.submit_button}>Add</button>
      </form>
    </div>
  );
}

export default AddComment;
