import React from "react";
import PostMaker from "./PostMaker";
import {usePostActions} from "../../../../../hooks/usePostActions";

const PostMakerContainer = ({t}) => {
  const {newPostText ,useTextChangeHandlers, handleKeyDown, handleAddPost} = usePostActions();

  return (
    <PostMaker newPostText={newPostText} useTextChangeHandlers={useTextChangeHandlers}
    handleKeyDown={handleKeyDown} handleAddPost={handleAddPost} t={t}/>
  );
};

export default PostMakerContainer;
