import React from "react";
import {
  ErrorTextWrapper,
  InputContainer,
  InputLabel,
  InputWrapper,
} from "./Input.styles";

interface IProps {
  label?: string;
  type: string;
  hasError?: boolean;
  placeholder?: string;
}

const Input: React.FC<IProps> = (props) => {
  const { label, type, hasError, placeholder } = props;

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputWrapper type={type} placeholder={placeholder} hasError={hasError} />
      {hasError && <ErrorTextWrapper>Error</ErrorTextWrapper>}
    </InputContainer>
  );
};

export default Input;
