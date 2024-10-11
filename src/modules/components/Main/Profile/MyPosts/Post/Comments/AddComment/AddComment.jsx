import React from "react";
import Classes from "./AddComment.module.css"
import {addCommentActionCreator, updateNewCommentTextActionCreator} from "../../../../../../../../redux/state"

const AddComment = (props) => {
  const addComment = (event) => {
    event.preventDefault();
    const commentsId = props.commentsId;
    props.dispatch(addCommentActionCreator(commentsId));
  };

  const onCommentChange = (e) => {
    const text = e.target.value;
    const commentsId = props.commentsId;
    props.dispatch(updateNewCommentTextActionCreator(commentsId, text));
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
