import React from "react";
import Classes from './PostMaker.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../../redux/profile-reducer';

const PostMaker = (props) => {
  const addPost = (event) => {
    event.preventDefault();
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <section className="newPost section">
      <div className={Classes.content}>
        <span className={Classes.title}>My posts</span>
        <form className={Classes.form} action="" method="POST">
          <textarea value={props.newPostText} onChange={onPostChange}
                    className={Classes.textarea} placeholder="Your news..."/>
          <div className={Classes.buttonBox}>
            <button onClick={addPost} className={Classes.button}>Post</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PostMaker;
