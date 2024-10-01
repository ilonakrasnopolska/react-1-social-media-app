import React from "react";
import Classes from "./AddComment.module.css"

const AddComment = (props) => {
  return (
    <div className={Classes.add_comment}>
      <form className={Classes.comment_form}>
        <textarea className={Classes.comment_input} placeholder="Add a comment..." />
        <button className={Classes.submit_button}>Add</button>
      </form>
    </div>
  );
}

export default AddComment;
