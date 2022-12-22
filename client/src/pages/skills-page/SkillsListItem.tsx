import ArrowRight from "assets/svg-components/ArrowRight";
import React from "react";
import { SkillsListItemWrapper } from "./SkillsPage.styles";

interface IProps {
  title: string;
  description: string;
  level: String;
}

const SkillsListItem: React.FC<IProps> = (props) => {
  const { title, description, level } = props;

  return (
    <SkillsListItemWrapper>
      <div className="main_title">
        <h3>{title}</h3>
      </div>
      <div className="sub_title">
        <h4>{level}</h4>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>

      <div className="button">
        View All Providers <ArrowRight />
      </div>
    </SkillsListItemWrapper>
  );
};

export default SkillsListItem;
