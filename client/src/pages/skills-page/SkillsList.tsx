import { Skill } from "common";
import React from "react";
import SkillsListItem from "./SkillsListItem";
import { SkillsListWrapper } from "./SkillsPage.styles";

interface IProps {
  skills: Skill[];
}

const SkillsList: React.FC<IProps> = (props) => {
  const { skills } = props;

  return (
    <SkillsListWrapper>
      {skills?.map((item) => (
        <SkillsListItem
          title={item.title}
          description={item.description}
          level={item.level}
        />
      ))}
    </SkillsListWrapper>
  );
};

export default SkillsList;
