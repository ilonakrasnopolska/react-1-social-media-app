import React from "react";
import Classes from './Term.module.css'
import {useSelector, useDispatch} from "react-redux";
import {toggleTerm} from "../../../../../../../redux/SettingsReducer/settings-reducer";


const Term = () => {
  const terms = useSelector(state => state.settings.termsAndConditions);
  const dispatch = useDispatch();

  return (
    <ul className={Classes.terms}>
      {terms.map((term) => (
        <li key={term.id} className={Classes.termItem}>
          <button
            className={`${Classes.accordionButton} ${
              term.isOpen ? Classes.active : ""
            }`}
            onClick={() => dispatch(toggleTerm(term.id))}
          >
            {term.term}
          </button>

          {term.isOpen && (
            <ol className={Classes.accordionContent}>
              {term.description.map((desc, index) => (
                <li key={index} className={Classes.description}>
                  {desc.text}
                </li>
              ))}
            </ol>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Term;
