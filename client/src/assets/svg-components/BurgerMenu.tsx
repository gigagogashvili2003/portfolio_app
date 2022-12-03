import React from "react";
import { BurgerMenuSvgIcon } from "./svgStyleds/SvgIcons-styles";

interface Iprops {
  isNavigationOpen: boolean;
}

const BurgerMenu: React.FC<Iprops> = (props) => {
  const { isNavigationOpen } = props;
  return (
    <BurgerMenuSvgIcon
      isNavigationOpen={isNavigationOpen}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="30px"
      height="30px"
    >
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
    </BurgerMenuSvgIcon>
  );
};

export default BurgerMenu;
