import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import { LogoGroupWrapper } from "./Header.styles";

interface IProps {
  isNavigationOpen?: boolean;
  className?: string;
}

const LogoGroup: React.FC<IProps> = (props) => {
  const { isNavigationOpen, className } = props;

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <LogoGroupWrapper
      onClick={navigateHandler}
      className={className}
      isNavigationOpen={isNavigationOpen}
    >
      <Logo isNavigationOpen={isNavigationOpen} />
      <div className="name_block">
        <h1>Giga Gogashvili</h1>
        <h3>FRONTEND DEVELOPER</h3>
      </div>
    </LogoGroupWrapper>
  );
};

export default LogoGroup;
