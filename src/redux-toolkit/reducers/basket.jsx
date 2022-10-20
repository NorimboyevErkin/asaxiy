import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.value = action.payload;
    },
    pushBasket: (state, action) => {
      state.value.push(action.payload);
    },
    deleteBasket: (state, action) => {
      state.value = state.value.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { setBasket } = basket.actions;
export const { pushBasket } = basket.actions;
export const { deleteBasket } = basket.actions;

export default basket.reducer;
