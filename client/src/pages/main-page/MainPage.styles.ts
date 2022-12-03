import styled from "styled-components";

export const MainPageWrapper = styled.div`
  padding: 2rem 0;
`;
export const MainPageTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IntroBlock = styled.div`
  max-width: 600px;
  width: 100%;
  .name {
    color: ${(p) => p.theme.SECONDARY_TEXT_COLOR};
    font-size: 0.938rem;
    letter-spacing: 0.188rem;
  }

  .job_title {
    color: ${(p) => p.theme.DEFAULT_FONT_COLOR};

    font-size: 4.375rem;
    font-weight: 700;
    line-height: 5rem;
    margin-bottom: 1rem;
    font-family: "Helvetica";
  }

  .description {
    color: ${(p) => p.theme.SECONDARY_TEXT_COLOR};
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .action_buttons {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    margin-top: 1.5rem;

    .divider {
      color: ${(p) => p.theme.SECONDARY_TEXT_COLOR};
    }
  }
`;

export const MyImageBlock = styled.div`
  img {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 1rem;
  }
`;
