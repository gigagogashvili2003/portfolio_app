import styled from "styled-components";

export const SocialMediaPageWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
`;

export const SocialMediaListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
`;

export const SocialMediaListItemWrapper = styled.li`
  max-width: 17rem;
  width: 100%;
  min-height: 17rem;
  height: 100%;
  /* box-shadow: 0 5px 15px rgb(0 0 0 / 35%); */
  background-color: #4c4c4c;
  border-radius: 0.5rem;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    scale: 1.03;
  }

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${(p) => p.theme.WHITE_COLOR};
  }

  .top_block {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
    position: relative;

    .title {
      color: white;
      text-align: center;
      font-size: 1.5rem;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      font-weight: 600;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
