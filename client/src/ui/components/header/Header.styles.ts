import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 3rem;

  .navigation-enter {
    transform: translateY(100%);
  }
  .navigation-enter-active {
    transition: all 1s;
    transform: translateY(0%);
  }
  .navigation-exit {
    transform: translateY(0%);
  }
  .navigation-exit-active {
    transition: all 1s;
    transform: translateY(-100%);
  }
`;

export const HeaderLogoBlock = styled.div`
  z-index: 11;
`;

export const HeaderBurgerBlock = styled.div<IProps>`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  z-index: 11;
  cursor: pointer;

  .burger_condition {
    h4 {
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 0.125rem;
      line-height: 1.563rem;
      color: ${(p) =>
        !p.isNavigationOpen ? p.theme.DEFAULT_FONT_COLOR : p.theme.WHITE_COLOR};
      transition: color 2.5s;
    }
  }
`;

interface IProps {
  isNavigationOpen?: boolean;
}

export const LogoGroupWrapper = styled.div<IProps>`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
  cursor: pointer;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.5;
  }

  .name_block {
    h1 {
      font-size: 1.563rem;
      font-weight: 700;
      line-height: 2.188rem;
      color: ${(p) =>
        !p.isNavigationOpen ? p.theme.DEFAULT_FONT_COLOR : p.theme.WHITE_COLOR};
      transition: color 2.5s;
    }

    h3 {
      font-size: 0.813rem;
      font-weight: 700;
      letter-spacing: 0.125rem;

      color: ${(p) =>
        !p.isNavigationOpen
          ? p.theme.SECONDARY_TEXT_COLOR
          : p.theme.WHITE_COLOR};
      transition: color 2.5s;
    }
  }
`;

export const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(p) => p.theme.DEFAULT_FONT_COLOR};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 10;

  .menu_title {
    color: ${(p) => p.theme.WHITE_COLOR};
    font-weight: 700;
    letter-spacing: 0.3rem;
    opacity: 0.6;
  }

  .nav_ul {
    .nav_li {
      text-align: center;
      .nav_link {
        color: ${(p) => p.theme.WHITE_COLOR};
        font-size: 3rem;
        line-height: 4rem;
        font-weight: 700;
        opacity: 0.7;
        transition: opacity 0.3s ease-in-out;

        &:hover {
          opacity: 1;
        }
      }
      .nav_link_active {
        opacity: 1;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translate(-125%, -50%);

          width: 5rem;
          height: 0.3rem;
          background-color: ${(p) => p.theme.WHITE_BG};
        }
      }
    }
  }
`;
