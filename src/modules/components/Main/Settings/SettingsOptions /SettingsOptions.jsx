import React from "react";
import {useParams} from "react-router-dom";
import PersonalAccount from "./PersonalAccount/PersonalAccount";
import Confidentiality from "./Confidentiality/Confidentiality";
import Notifications from "./Notifications/Notifications";
import Insights from "./Insights/Insights";
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
      SettingComponent = <Notifications/>;
      break;
    case '4':
      SettingComponent = <Insights/>;
      break;
    case '5':
      SettingComponent = <Language/>;
      break;
    case '6':
      SettingComponent = <TermsAndPolicy/>;
      break;
    case '7':
      SettingComponent = <Help/>;
      break;
    case '8':
      SettingComponent = <LogOut/>;
      break;
    default:
      SettingComponent = <div>NOT FOUND</div>;
  }

  return (
    <div>
      {SettingComponent}
    </div>
  );
};

export default SettingsOptions;
