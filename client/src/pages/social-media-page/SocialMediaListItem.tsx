import GithubIcon from "assets/svg-components/GithubIcon";
import React from "react";
import { SocialMediaListItemWrapper } from "./SocialMedia.styles";

const SocialMediaListItem = () => {
  return (
    <SocialMediaListItemWrapper>
      <a>
        <div className="top_block">
          <GithubIcon />
          <h2 className="title">Github</h2>
        </div>
      </a>
    </SocialMediaListItemWrapper>
  );
};

export default SocialMediaListItem;
