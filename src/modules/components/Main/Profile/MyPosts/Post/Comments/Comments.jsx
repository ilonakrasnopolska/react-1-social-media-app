import React from "react";
import Classes from "./Comments.module.css"
import {useSelector, useDispatch} from "react-redux";
import {replyOnComment, deleteComment} from "../../../../../../../redux/ProfileReducer/profile-reducer";

const Comments = ({postId}) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.profile.posts.find(post => post.postId === postId));
  const Messages = post?.commentData.messages  || [];

  const onReplyToComment = (commentId) => {
    const comment = Messages.find(comment => comment.commentId === commentId);
    if (comment) {
      const userName = comment.user;
      dispatch(replyOnComment(commentId, `${userName},`, postId)); // Делаем reply на комментарий
    }
  }

  const onDeleteComment = (commentId) => {
    const confirmDelete = window.confirm("Delete comment?");
    if (confirmDelete) {
      dispatch(deleteComment(commentId, postId)); // Удаляем комментарий
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
