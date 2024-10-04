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
              <div>
                <strong>{comment.user} </strong>
                {comment.message1}
              </div>
              <button className={Classes.response_btn}>Response</button>
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
