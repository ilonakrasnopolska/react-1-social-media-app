import React from "react";
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
        <input
          id='anime-search-input'
          value={newSearchAnimeText}
          className={Classes.input}
          type="text"
          onChange={useTextChangeHandlers}
          placeholder={t('SearchAnime')}
        />
    </div>
  )
}

export default SearchAnime;
