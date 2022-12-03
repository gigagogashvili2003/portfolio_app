import React from "react";
import { LogoWrapper } from "./Logo.styles";

interface IProps {
  isNavigationOpen?: boolean;
}

const Logo: React.FC<IProps> = (props) => {
  const { isNavigationOpen } = props;

  return (
    <LogoWrapper isNavigationOpen={isNavigationOpen}>
      <span>G</span>
    </LogoWrapper>
  );
};

export default Logo;
