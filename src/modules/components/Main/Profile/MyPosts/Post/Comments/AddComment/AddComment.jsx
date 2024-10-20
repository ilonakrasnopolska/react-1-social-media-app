import React from "react";
import Classes from "./AddComment.module.css"
import {addCommentActionCreator, updateNewCommentTextActionCreator}
  from "../../../../../../../../redux/ProfileReducer/profile-reducer"

const AddComment = (props) => {
  const addComment = (event) => {
    event.preventDefault();
    props.dispatch(addCommentActionCreator(props.postId));
  };

  const onCommentChange = (e) => {
    const text = e.target.value;
    props.dispatch(updateNewCommentTextActionCreator(props.postId, text));
  }

  return (
    <div className={Classes.add_comment}>
      <form className={Classes.comment_form}>
        <textarea
          value={props.newCommentText}
          onChange={onCommentChange}
          className={Classes.comment_input}
          placeholder="Add a comment..."/>
        <button onClick={addComment} className={Classes.submit_button}>Add</button>
      </form>
    </div>
  );
}

export default AddComment;
