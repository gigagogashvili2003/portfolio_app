import React from "react";
import AnimatedTextUnderline from "ui/library/underline-animated-text/AnimatedTextUnderline";
import BottomPageTexts from "ui/library/work-together/BottomPageTexts";
import MyImage from "assets/images/my-image.jpg";
import {
  IntroBlock,
  MainPageTopBlock,
  MainPageWrapper,
  MyImageBlock,
} from "./MainPage.styles";

const MainPage = () => {
  const calculateMyAge = (): number => {
    const birthYear: number = new Date("Octoper 17, 2003").getFullYear();
    const currentYear: number = new Date().getFullYear();

    return currentYear - birthYear;
  };

  return (
    <MainPageWrapper>
      <MainPageTopBlock>
        <IntroBlock>
          <h4 className="name">GIGA GOGASHVILI</h4>
          <h1 className="job_title">Junior Frontend Developer</h1>
          <p className="description">
            I’m {calculateMyAge()} years old Self-Taught, Effective, Flexible,
            and Very motivated person.
          </p>

          <div className="action_buttons">
            <AnimatedTextUnderline
              text="View Projects"
              className="animated_action_button"
              fontSize="1.125rem"
              padding="0.5rem 0"
              lineHeight="1.75rem"
              underLineBackgroundColor="SECONDARY_TEXT_COLOR"
              path="/projects"
              fontWeight={700}
            />
            <span className="divider">or</span>
            <AnimatedTextUnderline
              className="animated_action_button"
              padding="0.5rem 0"
              text="Read About Me"
              fontSize="1.125rem"
              lineHeight="1.75rem"
              underLineBackgroundColor="SECONDARY_TEXT_COLOR"
              path="/about-me"
              fontWeight={700}
            />
          </div>
        </IntroBlock>
        <MyImageBlock>
          <img src={MyImage} alt="my image" />
        </MyImageBlock>
      </MainPageTopBlock>
      <BottomPageTexts />
    </MainPageWrapper>
  );
};

export default MainPage;
