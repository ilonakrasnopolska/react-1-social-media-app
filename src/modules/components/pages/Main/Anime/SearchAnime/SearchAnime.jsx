import React from "react";
import {SearchIcon} from "../../../../../../redux/assets/SVG-icons"
import Classes from './SearchAnime.module.css'

const SearchAnime = ({newSearchAnimeText, useTextChangeHandlers, useResetSearchQuery, t}) => {
  useResetSearchQuery();
  return (
    <div className={Classes.search}>
      <h1>{t('ChooseAnime')}</h1>
      <div className={Classes.input_wrapper}>
        <input
          id='anime-search-input'
          value={newSearchAnimeText}
          className={Classes.input}
          type="text"
          onChange={useTextChangeHandlers}
          placeholder={t('SearchAnime')}
        />
        <button className={Classes.search_btn}><SearchIcon/></button>
        </div>
    </div>
  )
}

export default SearchAnime;
