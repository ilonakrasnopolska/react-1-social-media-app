import { useDispatch, useSelector } from "react-redux";
import {addPost, deletePost} from "../../redux/ProfileReducer/profile-reducer";

export const usePostActions = () => {
  const dispatch = useDispatch();
  const newPostText = useSelector((state) => state.profile.newPostText);

  const handleAddPost = (e) => {
    e.preventDefault();
    if (newPostText.trim()) {
      dispatch(addPost());
    }
  };

  const onDeletePost = (postId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      dispatch(deletePost(postId));
    }
  };

  return { newPostText, handleAddPost, onDeletePost };
};
