import {createSlice} from "@reduxjs/toolkit";
import posters from "../Assets/Posters-src";
import {updateSearchAnimeTextHelper, filterAnimeListHelper} from "./AnimeHelpers/anime-helpers";
// Счетчики
let animeIdCounter = 1;

const baseAnimeUrl = '/anime/';


const initialState = {
  anime: [
    {
      name: 'Naruto', id: animeIdCounter, cover: `${posters.Naruto}`,
      description: `Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and` +
        `dreams of becoming the Hokage, the village\'s leader and strongest ninja.`,
      toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
    },
    {
      name: 'One Piece', id: animeIdCounter, cover: `${posters.OnePiece}`,
      description: `Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding` +
        `the greatest treasure ever, known as the "One Piece."`,
      toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
    },
    {
      name: 'My Hero Academia', id: animeIdCounter, cover: `${posters.MyHeroAcademia}`,
      description: `A superhero-admiring boy enrolls in a prestigious hero academy and learns` +
        `what it really means to be a hero, after the strongest superhero grants him his own powers.`,
      toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
    },
    {
      name: 'Jujutsu Kaisen', id: animeIdCounter, cover: `${posters.JujutsuKaisen}`,
      description: `A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself.` +
        `He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.`,
      toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
    },
    {
      name: 'The Seven Deadly Sins', id: animeIdCounter, cover: `${posters.TheSevenDeadlySins}`,
      description: `The story of the Seven Deadly Sins, a group of warriors who were wrongly accused of a crime` +
        `they didn't commit and went on a quest to vindicate themselves.`,
      toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
    },
    {
      name: 'Black Clover', id: animeIdCounter++, cover: `${posters.BlackClover}`,
      description: `Asta and Yuno were abandoned together at the same church and have been inseparable since.` +
        `As children, they promised that they would compete against each other to see who would become the next Emperor Magus.`,
      toWatchUrl: `${baseAnimeUrl}${animeIdCounter}`

    },
    {
      name: 'Fairy Tail', id: animeIdCounter, cover: `${posters.FairyTail}`,
      description: `Lucy, an aspiring Celestial Wizard, becomes a friend and ally to powerful wizards` +
        `Natsu, Gray, and Erza, who are part of the (in)famous wizard guild, Fairy Tail.`,
      toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
    },
  ],
  newSearchAnimeText: '',
  filteredAnime: [],
}
initialState.filteredAnime = initialState.anime;


const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      updateSearchAnimeTextHelper(state, action);
      filterAnimeListHelper(state);
    },
  }
})

export const {
  setSearchQuery
} = animeSlice.actions;


export default animeSlice.reducer;
