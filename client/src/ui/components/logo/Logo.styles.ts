import styled from "styled-components";

export const LogoWrapper = styled.div<IProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(p) =>
    p.isNavigationOpen ? p.theme.DEFAULT_FONT_COLOR : p.theme.WHITE_BG};
  border: 3px solid
    ${(p) =>
      p.isNavigationOpen ? p.theme.WHITE_BG : p.theme.DEFAULT_FONT_COLOR};
  color: ${(p) =>
    p.isNavigationOpen ? p.theme.WHITE_COLOR : p.theme.DEFAULT_FONT_COLOR};
  font-size: 35px;
  font-weight: 700;
  transition: all 2.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IProps {
  isNavigationOpen?: boolean;
}
