import React from "react";
import Classes from './ConfidentialityList.module.css'
import {useConfidentialityActions} from "../../../../../../../hooks/useConfidentialityActions";

const ConfidentialityList = ({confidentiality, t}) => {
  const {handleChange} = useConfidentialityActions()

  return (
    <ul className={Classes.list}>
      {confidentiality.map((confidentiality, index) => (
        <li key={index} className={Classes.item}>
          <h3>{t(confidentiality.title)}</h3>
          <p>{t(confidentiality.description)}</p>
          <ul className={Classes.subList}>
            {confidentiality.settings.map((setting) => (
              <li key={setting.id} className={Classes.subItem}>
                <label>
                  <input
                    type="radio"
                    name={confidentiality.title}
                    value={setting.value}
                    checked={setting.value === confidentiality.checked}
                    onChange={() => handleChange(setting.value, confidentiality.title)}
                  />
                  {t(setting.name)}
                </label>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default ConfidentialityList;
