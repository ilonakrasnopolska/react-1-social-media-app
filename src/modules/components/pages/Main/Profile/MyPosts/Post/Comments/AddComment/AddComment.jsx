import React from "react";
import {useSelector} from "react-redux";
import Classes from "./AddComment.module.css"
import {useCommentHandler} from "../../../../../../../../hooks/useCommentHandler";

const AddComment = ({postId}) => {
  const newCommentText = useSelector(state =>
    state.profile.posts.find(post => post.postId === postId)?.newCommentText || '');
  const { handleCommentChange, handleAddComment, handleKeyDown } = useCommentHandler(postId, newCommentText);

  return (
    <div className={Classes.add_comment}>
      <form className={Classes.comment_form}
            onSubmit={handleAddComment}>
        <textarea
          id={`comment-${postId}`}
          name="comment"
          value={String(newCommentText)}
          onChange={handleCommentChange}
          onKeyDown={handleKeyDown}
          className={Classes.comment_input}
          placeholder="Add a comment..."/>
        <button onClick={handleAddComment} className={Classes.submit_button}>Add</button>
      </form>
    </div>
  );
}

export default AddComment;
