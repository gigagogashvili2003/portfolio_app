import React from "react";
import BurgerMenu from "assets/svg-components/BurgerMenu";
import { HeaderBurgerBlock } from "./Header.styles";

interface IProps {
  toggleNavigationHandler: (event: React.MouseEvent<HTMLElement>) => void;
  isNavigationOpen: boolean;
}

const Burger: React.FC<IProps> = (props) => {
  const { toggleNavigationHandler, isNavigationOpen } = props;

  return (
    <HeaderBurgerBlock
      isNavigationOpen={isNavigationOpen}
      onClick={toggleNavigationHandler}
    >
      <div className="burger_condition">
        <h4>{isNavigationOpen ? "CLOSE" : "OPEN"}</h4>
      </div>
      <div className="burger_wrapper">
        <BurgerMenu isNavigationOpen={isNavigationOpen} />
      </div>
    </HeaderBurgerBlock>
  );
};

export default Burger;
