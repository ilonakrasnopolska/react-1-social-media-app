import React from "react";
import {useParams} from "react-router-dom";
import PersonalAccount from "./PersonalAccount/PersonalAccount";
import Confidentiality from "./Confidentiality/Confidentiality";
import Language from "./Language/Language";
import TermsAndPolicy from "./TermsAndPolice/TermsAndPolicy";
import Help from "./Help/Help";
import LogOut from "./LogOut/LogOut";

const SettingsOptions = () => {
  const {id} = useParams();
  let SettingComponent;
  switch (id) {
    case '1':
      SettingComponent = <PersonalAccount/>;
      break;
    case '2':
      SettingComponent = <Confidentiality/>;
      break;
    case '3':
      SettingComponent = <Language/>;
      break;
    case '4':
      SettingComponent = <TermsAndPolicy/>;
      break;
    case '5':
      SettingComponent = <Help/>;
      break;
    case '6':
      SettingComponent = <LogOut/>;
      break;
    default:
      SettingComponent = <div>NOT FOUND</div>;
  }

  return (
      SettingComponent
  );
};

export default SettingsOptions;
