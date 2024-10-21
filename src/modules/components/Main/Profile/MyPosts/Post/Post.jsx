import React, {useState} from "react";
import {useDispatch} from "react-redux";
import Classes from "./Post.module.css"
import Reactions from "./Reactions/Reactions";
import Comments from "./Comments/Comments";
import AddComment from "./Comments/AddComment/AddComment";
import {deletePost} from "../../../../../../redux/ProfileReducer/profile-reducer";

const Post = ({name, message, comments, likes, time, postId , isLiked, commentData, newCommentText}) => {
  const [isOpenComments, setIsCommentsOpen] = useState(false); // Локальное состояние для видимости комментариев
  const dispatch = useDispatch();

  const onDeletePost = (postId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      dispatch(deletePost(postId));
    }
  }

  // Функция для переключения видимости комментариев
  const toggleCommentsOpen = () => {
    setIsCommentsOpen(prevState => !prevState);
  };

  return (
    <li className={Classes.item}>
      <div className={Classes.post}>
        <img className={Classes.avatar}
             src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
             alt="User avatar"
        />
        <div className={Classes.post_message}>
          <span className={Classes.post_name}>
            {name}
          </span>
          <div className={Classes.post_content}>
            <span>
              {message}
            </span>
            <span className={Classes.post_time}>
              {time}
            </span>
          </div>
        </div>
        <Reactions comments={comments}
                   likes={likes}
                   postId={postId}
                   isLiked={isLiked}
                   commentData={commentData}
                   toggleCommentsOpen={toggleCommentsOpen}
                   isOpenComments={isOpenComments}/>
        <button onClick={() => onDeletePost(postId)} className={Classes.delete}>...</button>
      </div>
      {isOpenComments && (
        <div className={`${Classes.comments} ${isOpenComments ? Classes.visible : ""}`}>
          <Comments commentData={commentData} postId={postId}/>
          <AddComment postId={postId}
                      newCommentText={newCommentText}/>
        </div>
      )}
    </li>
  );
}

export default Post;
