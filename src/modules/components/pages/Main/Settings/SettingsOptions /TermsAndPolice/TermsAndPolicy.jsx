import React from "react";
import CommonClasses from '../../Settings.module.css'
import Term from "./Term/Term";
import Title from "../../../../../common/Title";

const TermsAndPolicy = ({terms}) => {
  return (
    <section className='terms section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses}
                 text="Terms and Policy"/>
          <Term terms={terms} />
        </div>
      </div>
    </section>
  )
}

export default TermsAndPolicy;
