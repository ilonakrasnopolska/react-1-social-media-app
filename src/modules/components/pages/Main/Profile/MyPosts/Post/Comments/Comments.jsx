import React from "react";
import Classes from "./Comments.module.css"
import {useCommentActions} from "../../../../../../../hooks/useCommentActions";
import Avatar from "../../../../../../common/Avatar";

const Comments = ({postId}) => {
  const { Messages, onReplyToComment, onDeleteComment } = useCommentActions(postId);
  return (
    <ul className={Classes.list}>
      {Messages.length > 0 ? (
        Messages.map((comment, index) => (
          <li key={index} className={Classes.item}>
            <Avatar src={comment.avatar} alt='User avatar' className={Classes.avatar}/>
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
