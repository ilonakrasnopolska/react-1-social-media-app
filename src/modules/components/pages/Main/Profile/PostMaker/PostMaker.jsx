import React from "react";
import Classes from './PostMaker.module.css';
import {usePostActions} from "../../../../../hooks/usePostActions";
import Button from "../../../../common/Button";
import {useInputHandlers} from "../../../../../hooks/useInputHandlers";
import {updateNewPostText} from "../../../../../../redux/ProfileReducer/profile-reducer";

const PostMaker = ({t}) => {
  const {newPostText, handleAddPost} = usePostActions();
  const {handleKeyDown} = useInputHandlers('',handleAddPost);
  const {useTextChangeHandlers} = useInputHandlers(updateNewPostText);
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
