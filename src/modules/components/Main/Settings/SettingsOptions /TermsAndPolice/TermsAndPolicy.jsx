import React from "react";
import CommonClasses from '../../Settings.module.css'
import Term from "./Term/Term";

const TermsAndPolicy = () => {
  return (
    <section className='terms section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <h2 className={CommonClasses.title}>Terms and Policy</h2>
           <Term />
        </div>
      </div>
    </section>
  )
}

export default TermsAndPolicy;
