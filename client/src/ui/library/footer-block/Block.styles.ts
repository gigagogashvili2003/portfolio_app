import styled from "styled-components";

export const BlockWrapper = styled.div`
  max-width: 300px;
  width: auto;
`;

export const Title = styled.h2`
  color: ${(p) => p.theme.DEFAULT_FONT_COLOR};
  font-size: 1.563rem;
  font-weight: 700;
`;

export const AdditionalText = styled.p`
  color: ${(p) => p.theme.SECONDARY_TEXT_COLOR};
  font-weight: 400;
  line-height: 1.25rem;
  margin-block: 1rem;
`;

export const BlockListWrapper = styled.ul``;

export const BlockListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  line-height: 1.5rem;
  transition: all 0.3s ease-out;

  &:hover {
    opacity: 0.5;
  }

  .additional_title {
    color: ${(p) => p.theme.SECONDARY_TEXT_COLOR};
    margin-right: 1rem;
  }

  .value,
  .link_value {
    color: ${(p) => p.theme.DEFAULT_FONT_COLOR};
    cursor: pointer;
  }
`;
