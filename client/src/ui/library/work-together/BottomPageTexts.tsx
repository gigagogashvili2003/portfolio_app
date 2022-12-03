import React from "react";
import { Link } from "react-router-dom";
import AnimatedTextUnderline from "../underline-animated-text/AnimatedTextUnderline";
import { BottomPageTextsWrapper } from "./BottomPageTexts.styles";

interface IProps {
  subText?: string;
  mainText?: string;
  path?: string;
}

const BottomPageTexts: React.FC<IProps> = (props) => {
  const {
    subText = "NEED A JUNIOR FRONTEND DEVELOPER?",
    mainText = "LET'S WORK TOGETHER",
    path = "/contact-us",
  } = props;
  return (
    <BottomPageTextsWrapper>
      <div className="sub_text">
        <span>{subText}</span>
      </div>
      <div className="main_text">
        <AnimatedTextUnderline
          text={mainText}
          path={path}
          fontWeight={800}
          fontSize="3.75rem"
        />
      </div>
    </BottomPageTextsWrapper>
  );
};

export default BottomPageTexts;
