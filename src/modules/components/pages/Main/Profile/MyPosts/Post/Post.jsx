import Classes from "./Post.module.css"
import Reactions from "./Reactions/Reactions";
import Comments from "./Comments/Comments";
import AddComment from "./Comments/AddComment/AddComment";
import {usePostActions} from "../../../../../../hooks/usePostActions";
import Avatar from "../../../../../common/Avatar";

const Post = ({ post }) => {
  const { onDeletePost } = usePostActions();
  const isCommentsOpen = post.commentData.commentsVisibility;

  if (!post) return null;

  return (
    <li className={Classes.item}>
      <div className={Classes.post}>
        <Avatar src={post.avatar} alt='User avatar' className={Classes.avatar}/>
        <div className={Classes.post_message}>
          <span className={Classes.post_name}>{post.name}</span>
          <div className={Classes.post_content}>
            <span>{post.message}</span>
            <span className={Classes.post_time}>{post.time}</span>
          </div>
        </div>
        <Reactions post={post}/>
        <button onClick={() => onDeletePost(post.postId)} className={Classes.delete}>...</button>
      </div>
      {isCommentsOpen && (
        <div className={`${Classes.comments} ${isCommentsOpen ? Classes.visible : ""}`}>
          <Comments postId={post.postId}/>
          <AddComment postId={post.postId} />
        </div>
      )}
    </li>
  );
}

export default Post;
