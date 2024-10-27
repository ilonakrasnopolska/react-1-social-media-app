import Classes from "./CreateNewChat.module.css";
import React from "react";
import {SearchIcon} from "../../../../../../assets/SVG-icons";
import {useDispatch, useSelector} from "react-redux";
import {updateSearchUserText} from "../../../../../../redux/DialogsReducer/dialogs-reducer";


const CreateNewChat = () => {
  const dispatch = useDispatch();
  const searchUserText = useSelector(state => state.dialogs.searchUserText);

  const onTextChange = (e) => {
    const text = e.target.value;
    dispatch(updateSearchUserText(text));
  };

  const onSearch = (event) => {
    event.preventDefault();
  }
  return (
    <div className={Classes.box}>
      <form className={Classes.form}>
        <input className={Classes.input}
               value={searchUserText}
               onChange={onTextChange}
               type="text"
               placeholder="Find user..."/>
        <button onClick={onSearch} className={Classes.button} type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateNewChat;
