import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './LogOut.module.css'
import Title from "../../../../../common/Title";
import NavButton from "../../../../../common/NavButton";

const LogOut = ({logOut, t}) => {
  return (
    <section className='log section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses} text={t("LogOut")}/>
          <div className={Classes.btn_wrapper}>
            <NavButton to={logOut.goBack.url} label={t("No")}
                       className={Classes.button} classNavLink={Classes.link}/>
            <NavButton to={logOut.goOut.url} label={t("Yes")}
                       className={Classes.button} classNavLink={Classes.link}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogOut;
