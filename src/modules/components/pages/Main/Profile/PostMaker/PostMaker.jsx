import React from "react";
import Classes from './PostMaker.module.css';
import {usePostActions} from "../../../../../hooks/usePostActions";
import Button from "../../../../common/Button";

const PostMaker = ({t}) => {
  const {newPostText ,useTextChangeHandlers, handleKeyDown, handleAddPost} = usePostActions();
  return (
    <section className="newPost section">
      <div className={Classes.content}>
        <span className={Classes.title}>{t('My Posts')}</span>
        <form className={Classes.form}
              onSubmit={handleAddPost}>
          <textarea
            name="newPost"
            value={newPostText}
            onChange={useTextChangeHandlers}
            onKeyDown={handleKeyDown}
            className={Classes.textarea}
            placeholder={t("Your News")}/>
          <div className={Classes.buttonBox}>
            <Button className={Classes.button} onClick={handleAddPost} label={t('Post')}/>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PostMaker;
