import { configureStore } from "@reduxjs/toolkit";
import basket from "./reducers/basket";
import favorites from "./reducers/favorites";

export const store = configureStore({
  reducer: {
    favorites: favorites,
    basket: basket,
  },
});
