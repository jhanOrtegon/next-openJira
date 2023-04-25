import { configureStore } from "@reduxjs/toolkit";
import { entriesSlice } from "./slices/entries";

const store = configureStore({
  reducer: {
    entries: entriesSlice.reducer,
  },
});

export default store;
