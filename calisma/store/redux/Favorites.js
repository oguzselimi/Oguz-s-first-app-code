import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    nicks: []
  },
  reducers: {
    addFavorite: (state, action) => {
      state.nicks.push(action.payload.nick);
    },
    removeFavorite: (state, action) => {
      state.nicks.splice(state.nicks.indexOf(action.payload.nick), 1);
    }
  }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;