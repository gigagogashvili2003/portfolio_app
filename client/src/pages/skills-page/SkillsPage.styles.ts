import styled from "styled-components";

export const SkillsPageWrapper = styled.div`
  padding: 3rem 0 8rem;
`;

export const SkillsTitlesBlock = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin: 0 auto;
  font-family: "Helvetica", sans-serif;
  font-weight: 600;
  letter-spacing: 0.2rem;
  color: ${(p) => p.theme.DEFAULT_FONT_COLOR};
  text-transform: uppercase;
  width: 60%;
  margin-bottom: 4rem;
`;

export const SkillsListContainer = styled.div``;

export const SkillsListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const SkillsListItemWrapper = styled.li`
  min-width: 18rem;
  max-width: 20rem;
  min-height: 25rem;
  max-height: 25rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;

  &:hover {
    background-color: ${(p) => p.theme.MAGENTA_COLOR};

    .main_title {
      h3 {
        color: ${(p) => p.theme.WHITE_COLOR};
      }
    }
    .sub_title {
      h4 {
        color: ${(p) => p.theme.WHITE_COLOR};
        border-color: ${(p) => p.theme.WHITE_COLOR};
      }
    }

    .button {
      color: ${(p) => p.theme.WHITE_COLOR};

      svg {
        path {
          fill: ${(p) => p.theme.WHITE_COLOR};
        }
      }
    }
    .description {
      color: ${(p) => p.theme.WHITE_COLOR};
    }
  }

  .main_title {
    h3 {
      color: ${(p) => p.theme.SECONDARY_FONT_COLOR};
      font-size: 2rem;
      font-weight: 700;
      margin: 1rem 0 2rem 0;
      transition: color 0.5s;
    }
  }
  .sub_title {
    h4 {
      color: ${(p) => p.theme.DEFAULT_FONT_COLOR};
      font-weight: 500;
      letter-spacing: 0.1rem;
      font-size: 1.125rem;
      padding-block: 0.8rem;
      margin-block: 1rem;
      transition: all 0.5s;

      border-top: 2px solid ${(p) => p.theme.MAGENTA_COLOR};
    }
  }
  .description {
    color: ${(p) => p.theme.SECONDARY_FONT_COLOR};
    font-weight: 500;
    line-height: 1.5rem;
    font-size: 0.9rem;
    transition: all 0.5s;
  }
  .button {
    color: ${(p) => p.theme.MAGENTA_COLOR};
    font-size: 1.125rem;
    font-weight: 600;
    transition: color 0.5s;
    position: absolute;
    bottom: 2rem;

    svg {
      path {
        transition: fill 0.5s;
      }
    }
  }
`;
