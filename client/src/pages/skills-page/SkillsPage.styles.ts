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
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 2rem;
`;

export const SkillsListItemWrapper = styled.li`
  min-width: 21rem;
  max-width: 20rem;
  min-height: 20rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.5s;
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
      font-size: 3.5rem;
      margin: 1rem 0 2rem 0;
      transition: color 0.5s;
    }
  }
  .sub_title {
    h4 {
      color: ${(p) => p.theme.DEFAULT_FONT_COLOR};
      font-weight: 700;
      font-family: "Helvetica", sans-serif;
      letter-spacing: 0.1rem;
      font-size: 1.125rem;
      padding-block: 0.8rem;
      margin-block: 1rem;
      transition: all 0.5s;

      border-top: 2px solid ${(p) => p.theme.MAGENTA_COLOR};
    }
  }
  .description {
    color: ${(p) => p.theme.DEFAULT_FONT_COLOR};
    font-weight: 500;
    line-height: 1.5rem;
    transition: all 0.5s;
  }
  .button {
    margin-top: 5rem;
    color: ${(p) => p.theme.MAGENTA_COLOR};
    font-size: 1.125rem;
    font-weight: 600;
    transition: color 0.5s;

    svg {
      path {
        transition: fill 0.5s;
      }
    }
  }
`;
