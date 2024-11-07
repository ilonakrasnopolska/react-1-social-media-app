import {createSlice} from "@reduxjs/toolkit";
import covers from "./AnimeHelpers/anime-cover";
import {updateSearchAnimeTextHelper} from "./AnimeHelpers/anime-helpers";
// Счетчики
let animeIdCounter = 1;

const initialState = {
  anime: [
    {
      name: 'Naruto' , id: animeIdCounter++, cover: `${covers.narutoPic}`,
      description: `Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and`+
        `dreams of becoming the Hokage, the village\'s leader and strongest ninja.`,
    },
    {
      name: 'One Piece' , id: animeIdCounter++, cover: `${covers.onePiecePic}`,
      description: `Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding`+
        `the greatest treasure ever, known as the "One Piece."`,
    },
    {
      name: 'My Hero Academia' , id: animeIdCounter++, cover: `${covers.myHeroAcademiaPic}`,
      description: `A superhero-admiring boy enrolls in a prestigious hero academy and learns`+
        `what it really means to be a hero, after the strongest superhero grants him his own powers.`,
    },
    {
      name: 'Jujutsu Kaisen' , id: animeIdCounter++, cover: `${covers.magicBattlePic}`,
      description: `A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself.`+
        `He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.`,
    },
    {
      name: 'The Seven Deadly Sins' , id: animeIdCounter++, cover: `${covers.sevenDeadlySinsPic}`,
      description: `The story of the Seven Deadly Sins, a group of warriors who were wrongly accused of a crime`+
        `they didn't commit and went on a quest to vindicate themselves.`,
    },
    {
      name: 'Black Clover' , id: animeIdCounter++, cover: `${covers.blackCloverPic}`,
      description: `Asta and Yuno were abandoned together at the same church and have been inseparable since.`+
        `As children, they promised that they would compete against each other to see who would become the next Emperor Magus.`,
    },
    {
      name: 'Fairy Tail' , id: animeIdCounter++, cover: `${covers.fairyTailPic}`,
      description: `Lucy, an aspiring Celestial Wizard, becomes a friend and ally to powerful wizards`+
        `Natsu, Gray, and Erza, who are part of the (in)famous wizard guild, Fairy Tail.`,
    },
  ],
  newSearchAnimeText: '',
}

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      updateSearchAnimeTextHelper(state, action);
    },
  }
})

export const {
  setSearchQuery
} = animeSlice.actions;


export default animeSlice.reducer;
