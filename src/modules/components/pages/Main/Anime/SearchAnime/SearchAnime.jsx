import React from "react";
import {SearchIcon} from "../../../../../../redux/assets/SVG-icons"
import Classes from './SearchAnime.module.css'
import {useInputHandlers} from "../../../../../hooks/useInputHandlers";
import {setSearchQuery} from "../../../../../../redux/AnimeReducer/anime-reducer";
import useResetSearchQuery from "../../../../../hooks/useResetSearchQuery"

const SearchAnime = ({newSearchAnimeText, t}) => {
  const {useTextChangeHandlers} = useInputHandlers(setSearchQuery);
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
