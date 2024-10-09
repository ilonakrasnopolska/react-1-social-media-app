import React from "react";
import Classes from "./AddComment.module.css"
import {addCommentActionCreator, updateNewCommentTextActionCreator} from "../../../../../../../../redux/state"

const AddComment = (props) => {
  let newCommentElement = React.createRef();

  let addComment = (event) => {
    event.preventDefault();
    let commentsId = props.commentsId;
    props.dispatch(addCommentActionCreator(commentsId));
  };

  let onCommentChange = () => {
    let text = newCommentElement.current.value;
    let commentsId = props.commentsId;
    props.dispatch(updateNewCommentTextActionCreator(commentsId,text));
  }

  return (
    <div className={Classes.add_comment}>
      <form className={Classes.comment_form}>
        <textarea ref={newCommentElement}
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
