import React from "react";
import Classes from './Help.module.css'
import {useSelector} from "react-redux";

const Help = () => {
  const contactMessageText = useSelector(state => state.contactMessageText);
  return (
    <section className='help section'>
      <div className={Classes.content}>
        <div className={Classes.wrapper}>
          <h2 className={Classes.title}>Contact Support</h2>
          <form className={Classes.contact_form}>
              <textarea
                value={contactMessageText}
                className={Classes.textarea}
                placeholder="Write your message here..."
                rows="5"
                cols="50"
              ></textarea>
            <button className={Classes.button} type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Help;
