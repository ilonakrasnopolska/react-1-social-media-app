import Classes from "./EditForm.module.css";
import React from "react";
import {useEditAccountForm} from "../../../../../../../../hooks/useEditAccountForm";
import renderInputFields from "./InputFields/InputFields";

const EditForm = ({personalAccount, userData, errors}) => {
  const {handleValueChanges, preventNumericInput} = useEditAccountForm(personalAccount)

  return (
    <form className={Classes.form}>
      {Object.entries(userData).map(([key, value]) =>
        key !== "avatar" ? (
          <div key={key} className={Classes.formGroup}>
            <label htmlFor={`input-${key}`} className={Classes.label}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <div className={Classes.input_box}>
              {renderInputFields(key, value, handleValueChanges, preventNumericInput, preventNumericInput, Classes)}
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
