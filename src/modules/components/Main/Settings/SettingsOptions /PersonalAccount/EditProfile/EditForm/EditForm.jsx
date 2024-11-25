import Classes from "./EditForm.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {editPersonalInfoText} from "../../../../../../../../redux/SettingsReducer/settings-reducer";

const EditForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.settings.personalAccount.userData);

  const onValueChange = (key, value) => {
    dispatch(editPersonalInfoText({ key, value }))
  };

  return (
    <form className={Classes.form} action="" method="POST" >
    {Object.entries(userData).map(([key, value]) => (
        key !== "avatar" && ( // Пропускаем поле `avatar`
          <div key={key} className={Classes.formGroup}>
            <label htmlFor={key} className={Classes.label}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              id={key}
              name={key}
              value={value}
              onChange={(e) => onValueChange(key, e.target.value)}
              className={Classes.input}
            />
          </div>
        )
      ))}
    </form>
  )
};

export default EditForm;
