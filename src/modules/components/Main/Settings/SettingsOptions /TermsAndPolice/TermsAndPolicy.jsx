import React from "react";
import Classes from './TermsAndPolicy.module.css'

const TermsAndPolicy = () => {
  return (
    <section className='terms section'>
        <div className={Classes.content}>
          <div className={Classes.wrapper}>
            <h2 className={Classes.title}>Terms and Policy</h2>
            <ul className={Classes.terms}>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default TermsAndPolicy;
