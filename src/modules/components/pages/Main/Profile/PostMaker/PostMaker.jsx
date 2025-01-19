import React from "react";
import Classes from './PostMaker.module.css';
import Button from "../../../../common/Button";

const PostMaker = ({newPostText, useTextChangeHandlers, handleKeyDown, handleAddPost, t}) => {
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
