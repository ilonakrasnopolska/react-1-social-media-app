import Classes from "./Post.module.css"
import ReactionsContainer from "./Reactions/ReactionsContainer";
import Comments from "./Comments/Comments";
import AddComment from "./Comments/AddComment/AddComment";
import Avatar from "../../../../../common/Avatar";

const Post = ({post, onDeletePost, isCommentsOpen, t}) => {
  return (
    <li className={Classes.item}>
      <div className={Classes.post}>
        <Avatar src={post.avatar} alt='User avatar' className={Classes.avatar}/>
        <div className={Classes.post_message}>
          <span className={Classes.post_name}>{t(post.name)}</span>
          <div className={Classes.post_content}>
            <span>{post.message}</span>
            <span className={Classes.post_time}>{post.time}</span>
          </div>
        </div>
        <ReactionsContainer post={post}/>
        <button onClick={() => onDeletePost(post.postId)} className={Classes.delete}>...</button>
      </div>
      {isCommentsOpen && (
        <div className={`${Classes.comments} ${isCommentsOpen ? Classes.visible : ""}`}>
          <Comments postId={post.postId} t={t}/>
          <AddComment postId={post.postId} t={t} />
        </div>
      )}
    </li>
  );
}

export default Post;
