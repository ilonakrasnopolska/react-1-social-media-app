import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './Help.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
  updateRequestUserNameText,
  updateRequestMessageText,
  sendSupportMessage,
  validateRequestForHelpForm
} from "../../../../../../redux/SettingsReducer/settings-reducer";

const Help = () => {
  const dispatch = useDispatch();
  const requestUserNameText = useSelector(state => state.settings.helpCenter.requestUserNameText);
  const requestMessageText = useSelector(state => state.settings.helpCenter.requestMessageText);
  const errors = useSelector(state => state.settings.helpCenter.errors);

  const submitSupportMessage = (event) => {
    event.preventDefault();
    const isValid = dispatch(validateRequestForHelpForm());
    if (!isValid) return;
    dispatch(sendSupportMessage());
  };

  const onUserNameChange = (e) => {
    const text = e.target.value;
    dispatch(updateRequestUserNameText(text))
  };

  const onMessageChange = (e) => {
    const text = e.target.value;
    dispatch(updateRequestMessageText(text))
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitSupportMessage(e);
    }
  };

  return (
    <section className='help section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <h2 className={CommonClasses.title}>Contact Support</h2>
          <p className={CommonClasses.text}>Need help? Contact us below!</p>
          <form className={Classes.contact_form} onSubmit={submitSupportMessage}>
            <div>
              <input className={`${Classes.input_name} ${errors.userNameError ? Classes.error : ''}`}
                     onChange={onUserNameChange}
                     onKeyDown={handleKeyDown}
                     value={requestUserNameText}
                     placeholder="Your name..."/>
              {errors.userNameError && <div className={Classes.error_message}>{errors.userNameError}</div>}
            </div>
            <div>
              <textarea
                className={`${Classes.textarea} ${errors.messageError ? Classes.error : ''}`}
                onChange={onMessageChange}
                onKeyDown={handleKeyDown}
                value={requestMessageText}
                placeholder="Write your message here..."
                rows="5"
                cols="50"
              ></textarea>
              {errors.messageError && <div className={Classes.error_message}>{errors.messageError}</div>}
            </div>
            <button onClick={submitSupportMessage}
                    className={Classes.button}
                    type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Help;
