import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Burger from "./Burger";
import { HeaderLogoBlock, HeaderWrapper } from "./Header.styles";

import LogoGroup from "./LogoGroup";
import Navigation from "./Navigation";

const Header = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  const toggleNavigationHandler = () => {
    setIsNavigationOpen((prevState) => !prevState);
  };

  return (
    <HeaderWrapper>
      <HeaderLogoBlock>
        <LogoGroup isNavigationOpen={isNavigationOpen} />
      </HeaderLogoBlock>

      <Burger
        isNavigationOpen={isNavigationOpen}
        toggleNavigationHandler={toggleNavigationHandler}
      />

      <CSSTransition
        nodeRef={nodeRef}
        in={isNavigationOpen}
        timeout={1000}
        unmountOnExit
        classNames="navigation"
      >
        <Navigation
          toggleNavigationHandler={toggleNavigationHandler}
          nodeRef={nodeRef}
        />
      </CSSTransition>
    </HeaderWrapper>
  );
};

export default Header;
