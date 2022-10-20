import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.value = action.payload;
    },
    pushFavorites: (state, action) => {
      state.value.push(action.payload);
    },
    deleteFavorites: (state, action) => {
      state.value = state.value.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { setFavorites } = favorites.actions;
export const { pushFavorites } = favorites.actions;
export const { deleteFavorites } = favorites.actions;

export default favorites.reducer;
