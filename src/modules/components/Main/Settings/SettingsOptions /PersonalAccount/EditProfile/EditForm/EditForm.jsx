import Classes from "./EditForm.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";
import {editPersonalInfoText} from "../../../../../../../../redux/SettingsReducer/settings-reducer";

const EditForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.settings.personalAccount.userData);
  const errors = useSelector(state => state.settings.personalAccount.errors);


  const genderOptions = [
    { value: "Female", label: "Female" },
    { value: "Male", label: "Male" }
  ];

  const onValueChange = (key, value) => {
    dispatch(editPersonalInfoText({ key, value }))
  };

  return (
    <form className={Classes.form} action="" method="POST">
      {Object.entries(userData).map(([key, value]) => (
        key !== "avatar" && ( // Пропускаем поле `avatar`
          <div key={key} className={Classes.formGroup}>
            <label htmlFor={key} className={Classes.label}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            {key === "dateOfBirth" ? (
              <input
                id={key}
                name={key}
                type="date" // Тип input для выбора даты
                value={value}
                onChange={(e) => onValueChange(key, e.target.value)}
                className={Classes.input}
              />
            ) : key === "gender" ? (
              <Select
                id={key}
                name={key}
                value={genderOptions.find(option => option.value === value)} // находим значение, которое соответствует value
                onChange={(selectedOption) => onValueChange(key, selectedOption.value)} // изменяем на значение, выбранное пользователем
                options={genderOptions}
                className={Classes.select} // Кастомный класс для стилизации
                classNamePrefix="custom-select" // Префикс для дочерних классов
              />
            ) : (
              <input
                id={key}
                name={key}
                value={value}
                onChange={(e) => onValueChange(key, e.target.value)}
                className={Classes.input}
              />
            )}
            {/* Display error if it exists for the field */}
            {errors[key] && <p className={Classes.error}>{errors[key]}</p>}
          </div>
        )
      ))}
    </form>
  );
};


export default EditForm;
