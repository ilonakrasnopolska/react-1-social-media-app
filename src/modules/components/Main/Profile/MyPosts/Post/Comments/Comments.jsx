import React from "react";
import Classes from "./Comments.module.css"

const Comments = (props) => {
  const Messages = props.commentData && props.commentData.messages ? props.commentData.messages : [];
  return (
    <ul className={Classes.list}>
      {Messages.length > 0 ? ( // Проверяем, есть ли комментарии
        Messages.map((comment, index) => (
          <li key={index} className={Classes.item}>
            <img
              className={Classes.avatar}
              src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
              alt="User avatar"
            />
            <div className={Classes.post}>
              <div className={Classes.comment}>
                <strong>{comment.user} </strong>
                <div className={Classes.content}>
                  <span>{comment.message1}</span>
                  <span className={Classes.time}>{comment.time}</span>
                  <button className={Classes.response_btn}>Response</button>
                </div>
              </div>
            </div>
            <button className={Classes.delete}>...</button>
          </li>
        ))
      ) : (
        <li className={Classes.item}>No comments yet</li> // Сообщение, если комментариев нет
      )}
    </ul>
  );
}

export default Comments;
