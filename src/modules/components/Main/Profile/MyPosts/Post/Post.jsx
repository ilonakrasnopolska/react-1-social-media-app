import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Classes from "./Post.module.css"
import Reactions from "./Reactions/Reactions";
import Comments from "./Comments/Comments";
import AddComment from "./Comments/AddComment/AddComment";
import {deletePost} from "../../../../../../redux/ProfileReducer/profile-reducer";

const Post = ({postId}) => {
  const post = useSelector(state => state.profile.posts.find(post => post.postId === postId));

  const [isOpenComments, setIsCommentsOpen] = useState(false);
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


  if (!post) {
    return null; // Обработка случая, если пост не найден
  }

  return (
    <li className={Classes.item}>
      <div className={Classes.post}>
        <img className={Classes.avatar}
             src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
             alt="User avatar"
        />
        <div className={Classes.post_message}>
          <span className={Classes.post_name}>
            {post.name}
          </span>
          <div className={Classes.post_content}>
            <span>
              {post.message}
            </span>
            <span className={Classes.post_time}>
              {post.time}
            </span>
          </div>
        </div>
        <Reactions toggleCommentsOpen={toggleCommentsOpen} postId={postId} />
        <button onClick={() => onDeletePost(postId)} className={Classes.delete}>...</button>
      </div>
      {isOpenComments && (
        <div className={`${Classes.comments} ${isOpenComments ? Classes.visible : ""}`}>
          <Comments postId={postId} />
          <AddComment postId={postId} />
        </div>
      )}
    </li>
  );
}

export default Post;
