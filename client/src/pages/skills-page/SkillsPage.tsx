import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { skillsSelector } from "store/skills/skills";
import { getSkills } from "store/skills/skills-actions";
import SkillsList from "./SkillsList";
import {
  SkillsListContainer,
  SkillsPageWrapper,
  SkillsTitlesBlock,
} from "./SkillsPage.styles";

const SkillsPage = () => {
  const dispatch = useAppDispatch();
  const skills = useAppSelector(skillsSelector);

  useEffect(() => {
    dispatch(getSkills());
  }, []);

  return (
    <SkillsPageWrapper>
      <SkillsTitlesBlock>Tech stack that i'm aware of</SkillsTitlesBlock>
      <SkillsListContainer>
        <SkillsList skills={skills} />
      </SkillsListContainer>
    </SkillsPageWrapper>
  );
};

export default SkillsPage;
