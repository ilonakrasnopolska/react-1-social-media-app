import React from "react";
import Classes from './PostMaker.module.css';

const PostMaker = (props) => {

  let newPostElement = React.createRef();

  let addPost = (event) => {
    event.preventDefault();
    let text = newPostElement.current.value;
    if (text.trim() !== '') { // Проверка на пустое значение
      props.addPost(text);
      newPostElement.current.value = ''; // Очищаем поле после отправки
    }
  }

  return (
    <section className="newPost section">
      <div className={Classes.content}>
        <span className={Classes.title}>My posts</span>
        <form className={Classes.form} action="" method="POST">
          <textarea ref={newPostElement} className={Classes.textarea} placeholder="Your news..."></textarea>
          <div className={Classes.buttonBox}>
            <button onClick={addPost} className={Classes.button}>Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PostMaker;
