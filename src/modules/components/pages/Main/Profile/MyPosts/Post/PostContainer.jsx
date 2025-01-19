import React from "react";
import Post from "./Post";
import { usePostActions } from "../../../../../../hooks/usePostActions";

const PostContainer = ({post, t}) => {
  const { onDeletePost } = usePostActions();
  const isCommentsOpen = post.commentData.commentsVisibility;
  if (!post) return null;

  return (
    <Post post={post} onDeletePost={onDeletePost} isCommentsOpen={isCommentsOpen} t={t}/>
  );
};

export default PostContainer;
