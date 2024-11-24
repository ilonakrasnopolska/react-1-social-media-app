import React from "react";
import Classes from './PersonalAccount.module.css'

const PersonalAccount = () => {
  return (
    <section className='personal section'>
      <div className={Classes.content}>
        <div className={Classes.wrapper}>
          <h2 className={Classes.title}>Personal Settings</h2>
          <p className={Classes.text}>Edit your personal profile:</p>
        </div>
      </div>
    </section>
)
}

export default PersonalAccount;
