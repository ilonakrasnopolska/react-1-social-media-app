import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './LogOut.module.css'
import Title from "../../../../../common/Title";
import NavButton from "../../../../../common/NavButton";

const LogOut = ({logOut}) => {
  return (
    <section className='log section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses} text='Are you sure you want to log out?'/>
          <div className={Classes.btn_wrapper}>
            <NavButton to={logOut.goBack.url} label='No'
                       className={Classes.button} classNavLink={Classes.link}/>
            <NavButton to={logOut.goOut.url} label='Yes'
                       className={Classes.button} classNavLink={Classes.link}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogOut;