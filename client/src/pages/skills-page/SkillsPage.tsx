import React from "react";
import SkillsList from "./SkillsList";
import {
  SkillsListContainer,
  SkillsPageWrapper,
  SkillsTitlesBlock,
} from "./SkillsPage.styles";

const SkillsPage = () => {
  return (
    <SkillsPageWrapper>
      <SkillsTitlesBlock>Tech skatck that i'm aware of</SkillsTitlesBlock>
      <SkillsListContainer>
        <SkillsList />
      </SkillsListContainer>
    </SkillsPageWrapper>
  );
};

export default SkillsPage;
