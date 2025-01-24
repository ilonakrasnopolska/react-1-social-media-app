import {createSlice} from "@reduxjs/toolkit";
import posters from "../assets/Posters-src";
import {setAnimeListHelper,
  updateSearchAnimeTextHelper,
  filterAnimeListHelper,
  clearSearchQueryHelper} from "./AnimeHelpers/anime-helpers";

// Счетчики
let animeIdCounter = 1;
const baseAnimeUrl = '/anime/';


const initialState = {
  // anime: [
  //   {
  //     name: { en: 'Naruto', ru: 'Наруто' }, id: animeIdCounter, cover: `${posters.Naruto}`,
  //     description: `Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and` +
  //       `dreams of becoming the Hokage, the village\'s leader and strongest ninja.`,
  //     toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
  //   },
  //   {
  //     name: { en: 'One Piece', ru: 'Ван Пис' }, id: animeIdCounter, cover: `${posters.OnePiece}`,
  //     description: `Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding` +
  //       `the greatest treasure ever, known as the "One Piece."`,
  //     toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
  //   },
  //   {
  //     name: { en: 'My Hero Academia', ru: 'Моя геройская академия' }, id: animeIdCounter, cover: `${posters.MyHeroAcademia}`,
  //     description: `A superhero-admiring boy enrolls in a prestigious hero academy and learns` +
  //       `what it really means to be a hero, after the strongest superhero grants him his own powers.`,
  //     toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
  //   },
  //   {
  //     name: { en: 'Jujutsu Kaisen', ru: 'Магическая битва' }, id: animeIdCounter, cover: `${posters.JujutsuKaisen}`,
  //     description: `A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself.` +
  //       `He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.`,
  //     toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
  //   },
  //   {
  //     name: { en: 'The Seven Deadly Sins', ru: 'Семь смертных грехов' }, id: animeIdCounter, cover: `${posters.TheSevenDeadlySins}`,
  //     description: `The story of the Seven Deadly Sins, a group of warriors who were wrongly accused of a crime` +
  //       `they didn't commit and went on a quest to vindicate themselves.`,
  //     toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
  //   },
  //   {
  //     name: { en: 'Black Clover', ru: 'Черный клевер' }, id: animeIdCounter++, cover: `${posters.BlackClover}`,
  //     description: `Asta and Yuno were abandoned together at the same church and have been inseparable since.` +
  //       `As children, they promised that they would compete against each other to see who would become the next Emperor Magus.`,
  //     toWatchUrl: `${baseAnimeUrl}${animeIdCounter}`

  //   },
  //   {
  //     name: { en: 'Fairy Tail', ru: 'Хвост феи' }, id: animeIdCounter, cover: `${posters.FairyTail}`,
  //     description: `Lucy, an aspiring Celestial Wizard, becomes a friend and ally to powerful wizards` +
  //       `Natsu, Gray, and Erza, who are part of the (in)famous wizard guild, Fairy Tail.`,
  //     toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
  //   },
  // ],
  anime: [],
  newSearchAnimeText: '',
  filteredAnime: [],
}
initialState.filteredAnime = initialState.anime;


const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setAnimeList: (state, action) => {
      setAnimeListHelper(state, action)
    },
    setSearchQuery: (state, action) => {
      const { text, language } = action.payload;
      updateSearchAnimeTextHelper(state, { payload: text });
      filterAnimeListHelper(state, language);
    },
    clearSearchQuery: (state) => {
      clearSearchQueryHelper(state);
    },
  }
})

export const {
  setAnimeList,
  setSearchQuery,
  clearSearchQuery
} = animeSlice.actions;


export default animeSlice.reducer;
