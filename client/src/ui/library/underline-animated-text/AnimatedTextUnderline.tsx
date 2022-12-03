import React from "react";
import { Link } from "react-router-dom";
import { AnimatedUnderlineTextWrapper } from "./AnimatedText.styles";

interface IProps {
  text: string;
  className?: string;
  path?: string;
  fontSize?: string;
  textColor?: string;
  fontFamily?: string;
  fontWeight?: number;
  underLineBackgroundColor?: string;
  animationDuration?: string;
  lineHeight?: string;
  padding?: string;
}

const AnimatedTextUnderline: React.FC<IProps> = (props) => {
  const {
    text,
    className,
    path,
    fontSize = "1rem",
    textColor = "DEFAULT_FONT_COLOR",
    fontFamily = "Helvetica, Poppins, sans-serif",
    fontWeight = 400,
    underLineBackgroundColor = "DEFAULT_FONT_COLOR",
    animationDuration = "0.5s",
    lineHeight = "inherit",
    padding = "0rem",
  } = props;

  return (
    <AnimatedUnderlineTextWrapper
      fontSize={fontSize}
      textColor={textColor}
      className={className}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      animationDuration={animationDuration}
      underLineBackgroundColor={underLineBackgroundColor}
      lineHeight={lineHeight}
      padding={padding}
    >
      {path !== undefined ? (
        <Link className="text" to={path}>
          {text}
        </Link>
      ) : (
        <span className="text">{text}</span>
      )}
    </AnimatedUnderlineTextWrapper>
  );
};

export default AnimatedTextUnderline;
