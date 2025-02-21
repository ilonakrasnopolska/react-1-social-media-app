import React from "react";
import {toggleTerm} from "../../../../redux/SettingsReducer/settings-reducer";
import {useDispatch} from "react-redux";


export const AccordionButton = ({MainClass, ClassActive, term, t}) => {
  const dispatch = useDispatch();
  return (
    <button
      className={`${MainClass} ${term.isOpen ? ClassActive.active : ""}`}
      onClick={() => dispatch(toggleTerm(term.id))}
    >
      {t(term.term)}
    </button>
  );
};

export const AccordionContent = ({MainClass, Classes, term, t}) => {
  return (
    <ol className={MainClass}>
      {term.description.map((desc, descIndex) => {
        return (
          <li key={descIndex} className={Classes.description}>
            {t(desc.text)}
          </li>
        );
      })}
    </ol>
  )
};
