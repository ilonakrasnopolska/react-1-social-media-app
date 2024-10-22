import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Classes from './PostMaker.module.css';
import {addPost, updateNewPostText} from "../../../../../redux/ProfileReducer/profile-reducer";

const PostMaker = () => {
  const dispatch = useDispatch();
  const newPostText = useSelector(state => state.profile.newPostText);
  console.log('newPostText from state:', newPostText);
  const handleAddPost = (event) => {
    event.preventDefault();
    dispatch(addPost())
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    console.log('Text from input:', text);
    dispatch(updateNewPostText(text))
  };

  return (
    <section className="newPost section">
      <div className={Classes.content}>
        <span className={Classes.title}>My posts</span>
        <form className={Classes.form} action="" method="POST">
          <textarea value={newPostText} onChange={onPostChange}
                    className={Classes.textarea} placeholder="Your news..."/>
          <div className={Classes.buttonBox}>
            <button onClick={handleAddPost} className={Classes.button}>Post</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PostMaker;
