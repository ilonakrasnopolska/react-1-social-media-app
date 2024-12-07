import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './Help.module.css'
import {useHelpFormHandler} from "../../../../../../hooks/useHelpFormHandler";
import {InputField, TextAreaField} from "../../../../../common/HelpForm/HelpForm";
import Title from "../../../../../common/Title";
import Button from "../../../../../common/Button";

const Help = ({helpCenter}) => {
  const {
    requestUserNameText,
    requestMessageText,
    errors,
    handleInputChange,
    handleKeyDown,
    handleSubmit,
  } = useHelpFormHandler(helpCenter);

  return (
    <section className='help section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses} text='Contact Support'/>
          <p className={CommonClasses.text}>Need help? Contact us below!</p>
          <form className={Classes.contact_form} onSubmit={handleSubmit}>
            <InputField value={requestUserNameText} onChange={handleInputChange("userName")}
                        onKeyDown={handleKeyDown} placeholder="Your name..." errors={errors.userNameError}
                        className={Classes.input_name} Classes={Classes}/>
            <TextAreaField value={requestMessageText} onChange={handleInputChange("message")}
                           onKeyDown={handleKeyDown} placeholder="Your message..." errors={errors.messageError}
                           className={Classes.textarea} Classes={Classes}/>
            <Button className={Classes.button} onClick={handleSubmit} label='Send Message'/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Help;
