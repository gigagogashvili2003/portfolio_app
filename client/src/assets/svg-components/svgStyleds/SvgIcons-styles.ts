import styled from "styled-components";

interface IProps {}

export const BurgerMenuSvgIcon = styled.svg<{ isNavigationOpen: boolean }>`
  fill: ${(p) =>
    p.isNavigationOpen ? p.theme.WHITE_BG : p.theme.DEFAULT_FONT_COLOR};
  transition: fill 2.5s;
`;
