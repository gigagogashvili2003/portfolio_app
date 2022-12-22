import { RootState } from "store";
import { useAppSelector } from "./../hooks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Skill } from "common";

interface ISkill {
  skills: Skill[];
}

const initialState: ISkill | [] = {
  skills: [],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    setSkills(state, action: PayloadAction<Skill[]>) {
      state.skills = action.payload;
    },
  },
});

export const { setSkills } = skillsSlice.actions;

export const skillsSelector = (state: RootState) => state.skills.skills;

export default skillsSlice;
