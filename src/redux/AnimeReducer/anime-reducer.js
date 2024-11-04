import {createSlice} from "@reduxjs/toolkit";
import covers from "./AnimeHelpers/anime-cover";
// Счетчики
let animeIdCounter = 1;

const initialState = {
  anime: [
    {
      name: 'Naruto' , id: animeIdCounter++,
    },
    {
      name: 'One Piece' , id: animeIdCounter++,
    },
    {
      name: 'My Hero Academia' , id: animeIdCounter++,
    },
    {
      name: 'Magic battle' , id: animeIdCounter++,
    },
    {
      name: 'Seven Deadly Sins' , id: animeIdCounter++,
    },
    {
      name: 'Black Clover' , id: animeIdCounter++,
    },
    {
      name: 'Fairy Tail' , id: animeIdCounter++,
    },
  ],
}

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    openAnime: (state) => {
      console.log(state)
    }
  }
})

export const {
  openAnime
} = animeSlice.actions;


export default animeSlice.reducer;
