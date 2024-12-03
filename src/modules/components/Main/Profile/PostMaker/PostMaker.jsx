import React from "react";
import Classes from './PostMaker.module.css';
import {usePostHandler} from "../../../../hooks/usePostHandler";

const PostMaker = () => {
  const {newPostText, handleAddPost, handlePostChange, handleKeyDown} = usePostHandler();

  return (
    <section className="newPost section">
      <div className={Classes.content}>
        <span className={Classes.title}>My posts</span>
        <form className={Classes.form}
              onSubmit={handleAddPost}>
          <textarea
            name="newPost"
            value={newPostText}
            onChange={handlePostChange}
            onKeyDown={handleKeyDown}
            className={Classes.textarea}
            placeholder="Your news..."/>
          <div className={Classes.buttonBox}>
            <button onClick={handleAddPost} className={Classes.button}>
              Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PostMaker;
