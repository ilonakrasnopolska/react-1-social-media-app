import React from "react";
import Classes from './PostMaker.module.css';

const PostMaker = () => {
  return (
    <section className="newPost section">
      <div className={Classes.content}>
        <h3>My posts</h3>
        <form className={Classes.form} action="" method="POST">
          <textarea className={Classes.textarea} placeholder="Your news..."></textarea>
          <div className={Classes.buttonBox}>
            <button className={Classes.button} type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PostMaker;
