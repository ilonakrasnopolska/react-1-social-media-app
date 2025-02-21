import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './Help.module.css'
import {InputField, TextAreaField} from "../../../../../common/HelpForm/HelpForm";
import Title from "../../../../../common/Title";
import Button from "../../../../../common/Button";

const Help = ({requestUserNameText, requestMessageText, errors, handleInputChange, handleKeyDown, handleFormSubmit, t}) => {
  return (
    <section className='help section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses} text={t("ContactSupport")}/>
          <p className={CommonClasses.text}>{t("NeedHelp")}</p>
          <form className={Classes.contact_form} onSubmit={handleFormSubmit}>
            <InputField value={requestUserNameText} onChange={handleInputChange("userName")}
                        onKeyDown={handleKeyDown} placeholder={t("YourName")}
                        errors={errors.userNameError}
                        className={Classes.input_name} Classes={Classes}/>
            <TextAreaField value={requestMessageText} onChange={handleInputChange("message")}
                           onKeyDown={handleKeyDown} placeholder={t("YourMessage")}
                           errors={errors.messageError}
                           className={Classes.textarea} Classes={Classes}/>
            <Button className={Classes.button} onClick={handleFormSubmit} label={t("SendMessage")}/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Help;
