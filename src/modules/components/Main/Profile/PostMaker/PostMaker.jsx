import React from "react";
import Classes from './PostMaker.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../../redux/state';

const PostMaker = (props) => {
  let newPostElement = React.createRef();

  let addPost = (event) => {
    event.preventDefault();
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <section className="newPost section">
      <div className={Classes.content}>
        <span className={Classes.title}>My posts</span>
        <form className={Classes.form} action="" method="POST">
          <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}
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
