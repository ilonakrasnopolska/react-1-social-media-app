import React from "react";
import Classes from "./Comments.module.css"
import AddComment from "./AddComment/AddComment";

const Comments = (props) => {
  return (
    <ul className={Classes.list}>
      {props.commentData.map((comment, index) => (
        <li key={index} className={Classes.item}>
          <img className={Classes.avatar}
               src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
               alt="User avatar"
          />
          <div className={Classes.post}>
            <div>
              <strong>{comment.messages.user} </strong>
              {comment.messages.message1}
            </div>
            <button className={Classes.response_btn}>Response</button>
          </div>
          <button className={Classes.delete}>...</button>
        </li>
      ))}
      <AddComment />
    </ul>
  );
}

export default Comments;
