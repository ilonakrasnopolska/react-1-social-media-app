import React from "react";
import Classes from "./Comments.module.css"
import {
  replyToCommentTextActionCreator,
  deleteCommentActionCreator
} from "../../../../../../../redux/ProfileReducer/profile-reducer";

const Comments = (props) => {
  const {commentData, dispatch} = props; // Деструктуризация props
  const Messages = commentData && commentData.messages ? commentData.messages : [];

  const onReplyToComment = (commentId) => {
    const comment = Messages.find(comment => comment.commentId === commentId);
    if (comment) {
      const userName = comment.user;
      dispatch(replyToCommentTextActionCreator(commentId, `${userName},`, props.postId)); // Делаем reply на комментарий
    }
  }

  const onDeleteComment = (commentId) => {
    const confirmDelete = window.confirm("Delete comment?");
    if (confirmDelete) {
      dispatch(deleteCommentActionCreator(commentId, props.postId)); // Удаляем комментарий
    }
  }

  return (
    <ul className={Classes.list}>
      {Messages.length > 0 ? ( // Проверяем, есть ли комментарии
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
