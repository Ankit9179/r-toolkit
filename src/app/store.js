import { configureStore } from "@reduxjs/toolkit";
import count from "../features/counter/counterSlice";
import aaaa from "../features/fetch/fetchSlice";

export const store = configureStore({
  reducer: {
    counter: count,
    fetch: aaaa,
  },
});
