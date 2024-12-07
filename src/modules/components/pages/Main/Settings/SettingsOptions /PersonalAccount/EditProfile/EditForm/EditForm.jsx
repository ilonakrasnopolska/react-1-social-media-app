import Classes from "./EditForm.module.css";
import React from "react";
import {useEditAccountHandler} from "../../../../../../../../hooks/useEditAccountHandler";
import renderInputFields from "./InputFields/InputFields";

const EditForm = ({personalAccount, userData, errors}) => {
  const {onValueChange, onKeyDownTest, onPasteTest} = useEditAccountHandler(personalAccount)

  return (
    <form className={Classes.form}>
      {Object.entries(userData).map(([key, value]) =>
        key !== "avatar" ? (
          <div key={key} className={Classes.formGroup}>
            <label htmlFor={`input-${key}`} className={Classes.label}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <div className={Classes.input_box}>
              {renderInputFields(key, value, onValueChange, onKeyDownTest, onPasteTest, Classes)}
              {errors[`${key}Error`] && (
                <span className={Classes.errorText}>
                  {errors[`${key}Error`]}
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
