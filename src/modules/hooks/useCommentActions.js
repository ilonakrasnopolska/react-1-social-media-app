import { useDispatch, useSelector } from "react-redux";
import {
  updateNewCommentText,
  addComment,
  replyOnComment,
  deleteComment,
} from "../../redux/ProfileReducer/profile-reducer";

export const useCommentActions = (postId) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.profile.posts.find((post) => post.postId === postId)
  );
  const Messages = post && post.commentData ? post.commentData.messages : [];
  const newCommentText = useSelector(
    (state) =>
      state.profile.posts.find((post) => post.postId === postId)
        ?.newCommentText || ""
  );

  const handleCommentChange = (e) => {
    dispatch(updateNewCommentText({ postId, value: e.target.value }));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newCommentText.trim()) {
      dispatch(addComment({ postId }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddComment(e);
    }
  };

  const onReplyToComment = (commentId) => {
    const comment = Messages.find((comment) => comment.commentId === commentId);
    if (comment) {
      const value = `${comment.user},`;
      dispatch(replyOnComment({ value, postId }));
    }
  };

  const onDeleteComment = (commentId) => {
    const confirmDelete = window.confirm("Delete comment?");
    if (confirmDelete) {
      dispatch(deleteComment({ commentId, postId }));
    }
  };

  return {
    newCommentText,
    handleCommentChange,
    handleAddComment,
    handleKeyDown,
    Messages,
    onReplyToComment,
    onDeleteComment,
  };
};
