import React from "react";
import {toggleTerm} from "../../../../redux/SettingsReducer/settings-reducer";
import {useDispatch} from "react-redux";


export const AccordionButton = ({MainClass, ClassActive, term}) => {
  const dispatch = useDispatch();
  return (
    <button
      className={`${MainClass} ${term.isOpen ? ClassActive.active : ""}`}
      onClick={() => dispatch(toggleTerm(term.id))}
    >
      {term.term}
    </button>
  );
};

export const AccordionContent = ({MainClass, Classes, term}) => {
  return (
    <ol className={MainClass}>
      {term.description.map((desc, index) => (
        <li key={index} className={Classes.description}>
          {desc.text}
        </li>
      ))}
    </ol>
  )
};
