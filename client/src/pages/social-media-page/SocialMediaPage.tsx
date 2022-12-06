import FacebookIcon from "assets/svg-components/FacebookIcon";
import React from "react";
import { SocialMediaPageWrapper } from "./SocialMedia.styles";
import SocialMediaList from "./SocialMediaList";

const SocialMediaPage = () => {
  return (
    <SocialMediaPageWrapper className="sss">
      <SocialMediaList />
    </SocialMediaPageWrapper>
  );
};

export default SocialMediaPage;
