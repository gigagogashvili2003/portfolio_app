import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 3rem 2rem;
  border-top: 1px solid ${(p) => p.theme.SECONDARY_TEXT_COLOR};
`;

export const FooterTopBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterBottomBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0 0 0;
  opacity: 0.5;
`;
