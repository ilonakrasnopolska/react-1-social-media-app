import Classes from "./EditForm.module.css";
import React from "react";
import {useDispatch} from "react-redux";
import Select from "react-select";
import {editPersonalInfoText,
  validateEditAccountForm} from "../../../../../../../../redux/SettingsReducer/settings-reducer";

const EditForm = ({userData, errors}) => {
  const dispatch = useDispatch();
  const genderOptions = [
    {value: "Female", label: "Female"},
    {value: "Male", label: "Male"}
  ];

  const onValueChange = (key, value) => {
    dispatch(editPersonalInfoText({key, value}))
    dispatch(validateEditAccountForm());
  };

  const onKeyDownTest = (e) => {
    if (/\d/.test(e.key)) {
      e.preventDefault();
    }
  };

  const onPasteTest = (e) => {
    const pasteData = e.clipboardData.getData("text");
    if (/\d/.test(pasteData)) {
      e.preventDefault();
    }
  };

  return (
    <form className={Classes.form} action="" method="POST">
      {Object.entries(userData).map(([key, value]) => (
        key !== "avatar" && (
          <div key={key} className={Classes.formGroup}>
            <label htmlFor={`input-${key}`} className={Classes.label}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            {key === "dateOfBirth" ? (
              <div className={Classes.input_box}>
              <input
                id={`input-${key}`} // Обновляем id с уникальным префиксом
                name={key}
                type="date"
                value={String(value)}
                onChange={(e) => onValueChange(key, e.target.value)}
                className={Classes.input}
                autoComplete="bday"
              />
              </div>
            ) : key === "gender" ? (
              <div className={Classes.input_box}>
              <Select
                inputId={`input-${key}`} // Используем inputId для Select
                name={key}
                value={genderOptions.find((option) => option.value === value)}
                onChange={(selectedOption) =>
                  onValueChange(key, selectedOption?.value || "")
                }
                options={genderOptions}
                className={Classes.select}
                classNamePrefix="custom-select"
                autoComplete="gender"
              />
              </div>
            ) : (
              <div className={Classes.input_box}>
              <input
                id={`input-${key}`} // Обновляем id с уникальным префиксом
                name={key}
                value={String(value)}
                onChange={(e) => onValueChange(key, e.target.value)}
                onKeyDown={onKeyDownTest}
                onPaste={onPasteTest}
                className={Classes.input}
                autoComplete={key === "name" ? "name" : "off"}
              />
                {errors[`${key}Error`] && <span className={Classes.errorText}>{errors[`${key}Error`]}</span>}
              </div>
            )}
          </div>
        )
      ))}
    </form>
  );
};


export default EditForm;
