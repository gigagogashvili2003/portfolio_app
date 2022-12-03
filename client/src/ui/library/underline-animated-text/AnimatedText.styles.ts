import styled from "styled-components";

export const AnimatedUnderlineTextWrapper = styled.div<IProps>`
  .text {
    color: ${(p) => p.theme[p.textColor]};
    font-size: ${(p) => p.fontSize};
    font-family: ${(p) => p.fontFamily};
    font-weight: ${(p) => p.fontWeight};
    line-height: ${(p) => p.lineHeight};
    padding: ${(p) => p.padding};
    position: relative;
    cursor: pointer;

    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.2rem;
      transform: scaleX(0);
      background-color: ${(p) => p.theme[p.underLineBackgroundColor]};
      transform-origin: bottom right;
      transition: transform 0.5s ease-out;
    }

    &:hover {
      ::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;

interface IProps {
  fontSize: string;
  textColor: string;
  fontFamily: string;
  fontWeight: number;
  underLineBackgroundColor: string;
  animationDuration: string;
  lineHeight: string;
  padding: string;
}
