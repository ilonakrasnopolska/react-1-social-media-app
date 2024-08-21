import React from "react";
import Classes from "./Post.module.css"
import Reactions from "./Reactions/Reactions";

const Post = (props) => {
  return (
          <li className={Classes.item}>
            <img className={Classes.avatar}
                 src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
                 alt="User avatar"
            />
            <div className={Classes.post}>
              {props.message}
            </div>
            <Reactions comments={props.comments} likes={props.likes} />
          </li>
  );
}

export default Post;
