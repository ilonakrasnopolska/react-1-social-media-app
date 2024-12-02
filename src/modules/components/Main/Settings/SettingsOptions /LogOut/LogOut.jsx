import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './LogOut.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const LogOut = () => {
  const settingsPage = useSelector(state => state.settings.logOut.goBack);
  const logIn = useSelector(state => state.settings.logOut.goOut);

  return (
    <section className='log section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <h2 className={CommonClasses.title}>Are you sure you want to log out?</h2>
          <div className={Classes.btn_wrapper}>
            <button className={Classes.button}>
              <NavLink className={Classes.link}
                       to={settingsPage.url}>
                No
              </NavLink>
            </button>
            <button className={Classes.button}>
              <NavLink className={Classes.link}
                       to={logIn.url}>
                Yes
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogOut;
