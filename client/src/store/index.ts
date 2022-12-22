import { configureStore, combineReducers } from "@reduxjs/toolkit";
import skillsSlice from "./skills/skills";

const store = configureStore({
  reducer: combineReducers({ skills: skillsSlice.reducer }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
