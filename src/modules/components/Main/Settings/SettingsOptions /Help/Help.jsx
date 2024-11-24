import React from "react";
import Classes from './Help.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
  updateRequestUserNameText,
  updateRequestMessageText,
  sendSupportMessage,
  validateForm
} from "../../../../../../redux/SettingsReducer/settings-reducer";

const Help = () => {
  const dispatch = useDispatch();
  const requestUserNameText = useSelector(state => state.settings.helpCenter.requestUserNameText);
  const requestMessageText = useSelector(state => state.settings.helpCenter.requestMessageText);
  const errors = useSelector(state => state.settings.helpCenter.errors);

  const submitSupportMessage = (event) => {
    event.preventDefault();
    const isValid = dispatch(validateForm());
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
      <div className={Classes.content}>
        <div className={Classes.wrapper}>
          <h2 className={Classes.title}>Contact Support</h2>
          <p className={Classes.text}>Need help? Contact us below!</p>
          <form className={Classes.contact_form} action="" method="POST" onSubmit={submitSupportMessage}>
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
