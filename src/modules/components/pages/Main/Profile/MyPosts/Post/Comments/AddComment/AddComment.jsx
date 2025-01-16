import React from "react";
import Classes from "./AddComment.module.css"
import {useCommentActions} from "../../../../../../../../hooks/useCommentActions";

const AddComment = ({postId, t}) => {
  const {newCommentText, handleCommentChange, handleAddComment, handleKeyDown } = useCommentActions(postId);
  return (
    <div className={Classes.add_comment}>
      <form className={Classes.comment_form}>
        <textarea
          id={`comment-${postId}`}
          name="comment"
          value={String(newCommentText)}
          onChange={handleCommentChange}
          onKeyDown={handleKeyDown}
          className={Classes.comment_input}
          placeholder={t("AddComment")}/>
        <button onClick={handleAddComment} className={Classes.submit_button}>{t('Add')}</button>
      </form>
    </div>
  );
}

export default AddComment;
