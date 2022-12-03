import styled from "styled-components";

export const BottomPageTextsWrapper = styled.div`
  text-align: center;
  margin: 7rem 0 3rem 0;
  .sub_text {
    color: ${(p) => p.theme.SECONDARY_TEXT_COLOR};
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.4rem;
    font-family: "Helvetica", "Poppins", sans-serif;
    line-height: 1.25rem;
  }
`;
