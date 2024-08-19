import React from "react";
import Classes from "./Post.module.css"
import Reactions from "./Reactions/Reactions";

const Post = () => {
  return (
          <li className={Classes.item}>
            <img className={Classes.avatar}
                 src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
                 alt="User avatar"
            />
            <div className={Classes.post}>
              Who is your favourite character in Naruto?
            </div>
            <Reactions/>
          </li>
  );
}

export default Post;
