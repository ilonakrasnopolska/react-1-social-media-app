import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import {addPost, deletePost, updateNewPostText} from "../../redux/ProfileReducer/profile-reducer";

export const usePostActions = () => {
  const dispatch = useDispatch();
  const { language } = useContext(LanguageContext);
  const newPostText = useSelector((state) => state.profile.newPostText);


  const useTextChangeHandlers = (e) => {
    dispatch(updateNewPostText({ text: e.target.value, language }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddPost(e);
    }
  };

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

  return { newPostText, useTextChangeHandlers, handleKeyDown, handleAddPost, onDeletePost };
};
