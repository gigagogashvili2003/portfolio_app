import styled, { css } from "styled-components";

interface IProps {
  hasError?: boolean;
}

export const InputWrapper = styled.input<IProps>`
  outline: none;
  border: none;
  border-bottom: 2px solid hsla(0, 0%, 69%, 0.5);
  border-radius: 5px;
  font-size: 20px;
  padding: 5px 0;
  width: 100%;

  &::placeholder {
    color: ${(p) => p.theme.DEFAULT_FONT_COLOR};
  }

  &:focus {
    background-color: lightblue;
  }

  ${(p) =>
    p.hasError &&
    css`
      background-color: #fddddd;
      border: 1px solid #b40e0e;

      &:focus {
        border-color: #ff8800;
        background-color: #fbe8d2;
      }
    `}
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const ErrorTextWrapper = styled.span``;

export const InputLabel = styled.label`
  font-size: 1rem;
  color: ${(p) => p.theme.SECONDARY_TEXT_COLOR};
`;
