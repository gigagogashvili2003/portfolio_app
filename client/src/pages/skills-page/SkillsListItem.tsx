import ArrowRight from "assets/svg-components/ArrowRight";
import React from "react";
import { SkillsListItemWrapper } from "./SkillsPage.styles";

const SkillsListItem = () => {
  return (
    <SkillsListItemWrapper>
      <div className="main_title">
        <h3>HTML</h3>
      </div>
      <div className="sub_title">
        <h4>EXPERIENCED</h4>
      </div>

      <div className="description">
        <p>
          Graduated Frontend course at Acacemy of Digital Industries, Where I
          learned HTML and CSS.
        </p>
      </div>

      <div className="button">
        View All Providers <ArrowRight />
      </div>
    </SkillsListItemWrapper>
  );
};

export default SkillsListItem;
