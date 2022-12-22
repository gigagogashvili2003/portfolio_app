import { AppDispatch } from "../index";
import { setSkills } from "./skills";
import { fetchSkills } from "services/skills";

export const getSkills = () => async (dispatch: AppDispatch) => {
  try {
    const skills = await fetchSkills();
    dispatch(setSkills(skills.data));
  } catch (err) {
    console.log(err);
  }
};
