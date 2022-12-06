import React from "react";
import { SocialMediaListWrapper } from "./SocialMedia.styles";
import SocialMediaListItem from "./SocialMediaListItem";

const SocialMediaList = () => {
  return (
    <SocialMediaListWrapper>
      <SocialMediaListItem />
      <SocialMediaListItem />
      <SocialMediaListItem />
      <SocialMediaListItem />
      <SocialMediaListItem />
    </SocialMediaListWrapper>
  );
};

export default SocialMediaList;
