import React from "react";
import Classes from './PostMaker.module.css';

const PostMaker = (props) => {
  let newPostElement = React.createRef();

  let addPost = (event) => {
    event.preventDefault();
      props.dispatch({type: "ADD_POST"});
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: "UPDATE_NEW_POST_TEXT", value: text});
  };

  return (
    <section className="newPost section">
      <div className={Classes.content}>
        <span className={Classes.title}>My posts</span>
        <form className={Classes.form} action="" method="POST">
          <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}
                    className={Classes.textarea} placeholder="Your news..." />
          <div className={Classes.buttonBox}>
            <button onClick={addPost} className={Classes.button}>Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PostMaker;
