import React from "react";
import CommonClasses from '../../Settings.module.css'
import Term from "./Term/Term";
import Title from "../../../../../common/Title";

const TermsAndPolicy = ({terms, t}) => {
  return (
    <section className='terms section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses}
                 text={t("TermsAndPolicy")}/>
          <Term terms={terms} t={t} />
        </div>
      </div>
    </section>
  )
}

export default TermsAndPolicy;
