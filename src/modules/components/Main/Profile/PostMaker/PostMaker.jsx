import React from "react";
import Classes from './PostMaker.module.css';

const PostMaker = (props) => {
  const [newPostText, setNewPostText] = React.useState('');

  let addPost = (event) => {
    event.preventDefault();
    if (newPostText && newPostText.trim() !== '') {
      props.addPost(); // Добавляем пост
      setNewPostText(''); // Очищаем состояние
    }
  };

  let onPostChange = (event) => {
    setNewPostText(event.target.value); // Обновляем состояние при изменении
    props.updateNewPostText(event.target.value); // Обновляем значение в props
  };

  return (
    <section className="newPost section">
      <div className={Classes.content}>
        <span className={Classes.title}>My posts</span>
        <form className={Classes.form} action="" method="POST">
          <textarea value={newPostText} onChange={onPostChange}
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
