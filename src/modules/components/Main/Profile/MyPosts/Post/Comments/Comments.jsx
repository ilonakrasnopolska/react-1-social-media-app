import React from "react";
import Classes from "./Comments.module.css"
import {useCommentHandler} from "../../../../../../hooks/useCommentHandler";

const Comments = ({postId}) => {
  const { Messages, onReplyToComment, onDeleteComment } = useCommentHandler(postId);

  return (
    <ul className={Classes.list}>
      {Messages.length > 0 ? (
        Messages.map((comment, index) => (
          <li key={index} className={Classes.item}>
            <img
              className={Classes.avatar}
              src={comment.avatar}
              alt="User avatar"
            />
            <div className={Classes.post}>
              <div className={Classes.comment}>
                <strong>{comment.user} </strong>
                <div className={Classes.content}>
                  <span>{comment.message}</span>
                  <span className={Classes.time}>{comment.time}</span>
                  <button onClick={() => onReplyToComment(comment.commentId)}
                          className={Classes.response_btn}>Response
                  </button>
                </div>
              </div>
            </div>
            <button onClick={() => onDeleteComment(comment.commentId)} className={Classes.delete}>...</button>
          </li>
        ))
      ) : (
        <li className={Classes.item}>No comments yet</li>
      )}
    </ul>
  );
}

export default Comments;
