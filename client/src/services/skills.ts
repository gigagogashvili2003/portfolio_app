import axios from "axios";
const url = "http://localhost:9000";

const skillsServices = {
  fetchSkills: () => axios.get(url + "/skills"),
};

export const { fetchSkills } = skillsServices;
