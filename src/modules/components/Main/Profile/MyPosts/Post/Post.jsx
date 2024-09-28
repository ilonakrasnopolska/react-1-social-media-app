import React from "react";
import Classes from "./Post.module.css"
import Reactions from "./Reactions/Reactions";

const Post = (props) => {
  console.log(props)
  let deletePost = () => {
    window.confirm('Are you sure you want to delete this post?');
  }

  return (
          <li className={Classes.item}>
            <img className={Classes.avatar}
                 src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
                 alt="User avatar"
            />
            <div className={Classes.post}>
              {props.message}
            </div>
            <Reactions dispatch={props.dispatch} comments={props.comments}
                       likes={props.likes} id={props.id} isLiked={props.isLiked}/>
            <button onClick={deletePost} className={Classes.delete}>...</button>
          </li>
  );
}

export default Post;
