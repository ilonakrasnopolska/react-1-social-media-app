import React from "react";
import Classes from "./Post.module.css"
import Reactions from "./Reactions/Reactions";
import Comments from "./Comments/Comments";

const Post = (props) => {
  let deletePost = () => {
    window.confirm('Are you sure you want to delete this post?');
  }
  const commentData = props.commentData.find(comment => comment.postId === props.id);
  const isCommentsVisible = commentData ? commentData.commentsVisibility : false

  return (
          <li className={Classes.item}>
            <div className={Classes.post}>
            <img className={Classes.avatar}
                 src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
                 alt="User avatar"
            />
            <div className={Classes.post_message}>
              {props.message}
            </div>
            <Reactions dispatch={props.dispatch} comments={props.comments}
                       likes={props.likes} id={props.id}
                       isLiked={props.isLiked} commentData={props.commentData}/>
            <button onClick={deletePost} className={Classes.delete}>...</button>
            </div>
            <div className={`${Classes.comments} ${isCommentsVisible ? Classes.visible : ''}`}>
              {isCommentsVisible && <Comments commentData={props.commentData}/>}
            </div>
          </li>
  );
}

export default Post;
