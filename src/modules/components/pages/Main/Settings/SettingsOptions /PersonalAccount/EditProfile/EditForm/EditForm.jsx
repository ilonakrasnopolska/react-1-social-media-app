import Classes from "./EditForm.module.css";
import React from "react";
import { useEditAccountForm } from "../../../../../../../../hooks/useEditAccountForm"; // Хук для обработки данных формы
import renderInputFields from "./InputFields/InputFields"; // Функция для рендеринга полей ввода

// Компонент для редактирования данных профиля
const EditForm = ({ personalAccount, userData, errors, t }) => {
  // Деструктуризация функции из хука для обработки изменений значений и предотвращения ввода чисел
  const { handleValueChanges, preventNumericInput } =
    useEditAccountForm(personalAccount);

  return (
    <form className={Classes.form}>
      {/* Перебор всех данных пользователя, за исключением аватара */}
      {Object.entries(userData).map(([key, value]) =>
        key !== "avatar" ? ( // Пропускаем аватар
          <div key={key} className={Classes.formGroup}>
            {/* Метка для каждого поля ввода */}
            <label htmlFor={`input-${key}`} className={Classes.label}>
              {/* Заголовок для каждого поля, с переводом */}
              {t(key.charAt(0).toUpperCase() + key.slice(1))}:
            </label>
            <div className={Classes.input_box}>
              {/* Рендеринг полей ввода с помощью вспомогательной функции */}
              {renderInputFields(
                key,
                value,
                handleValueChanges,
                preventNumericInput,
                preventNumericInput,
                Classes
              )}
              {/* Отображение ошибок, если они есть */}
              {errors[`${key}Error`] && (
                <span className={Classes.errorText}>
                  {errors[`${key}Error`]} {/* Текст ошибки */}
                </span>
              )}
            </div>
          </div>
        ) : null
      )}
    </form>
  );
};

export default EditForm;
