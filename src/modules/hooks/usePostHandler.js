import { useDispatch, useSelector } from "react-redux";
import {addPost, deletePost, updateNewPostText} from "../../redux/ProfileReducer/profile-reducer";

export const usePostHandler = (postId) => {
  const dispatch = useDispatch();
  const newPostText = useSelector((state) => state.profile.newPostText);

  const handleAddPost = (e) => {
    e.preventDefault();
    if (newPostText.trim()) {
      dispatch(addPost());
    }
  };

  const handlePostChange = (e) => {
    dispatch(updateNewPostText(e.target.value));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddPost(e);
    }
  };

  const onDeletePost = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      dispatch(deletePost(postId));
    }
  };

  return { newPostText, handleAddPost, handlePostChange, handleKeyDown, onDeletePost };
};
