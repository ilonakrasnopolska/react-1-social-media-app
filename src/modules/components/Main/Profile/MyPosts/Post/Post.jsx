import React, {useState} from "react";
import Classes from "./Post.module.css"
import Reactions from "./Reactions/Reactions";
import Comments from "./Comments/Comments";
import AddComment from "./Comments/AddComment/AddComment";

const Post = (props) => {
  const [isOpenComments, setIsCommentsOpen] = useState(false); // Локальное состояние для видимости комментариев

  let deletePost = () => {
    window.confirm('Are you sure you want to delete this post?');
  }
  const commentData = props.commentData.find(comment => comment.id === props.id);

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
            {props.name}
          </span>
          <div className={Classes.post_content}>
            <span>
              {props.message}
            </span>
            <span className={Classes.post_time}>
              {props.time}
            </span>
          </div>
        </div>
        <Reactions dispatch={props.dispatch}
                   comments={props.comments}
                   likes={props.likes}
                   id={props.id}
                   isLiked={props.isLiked}
                   commentData={props.commentData}
                   toggleCommentsOpen={toggleCommentsOpen}
                   isOpenComments={isOpenComments}/>
        <button onClick={deletePost} className={Classes.delete}>...</button>
      </div>
      {isOpenComments && (
        <div className={`${Classes.comments} ${isOpenComments ? Classes.visible : ""}`}>
          <Comments commentData={commentData} dispatch={props.dispatch}/> {/* Передаем массив сообщений, даже если пустой */}
          <AddComment commentsId={props.id}
                      newCommentText={commentData?.newCommentText || ""}
                      dispatch={props.dispatch}/>
        </div>
      )}
    </li>
  );
}

export default Post;
