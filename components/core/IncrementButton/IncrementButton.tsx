import React from "react";
import StyledButton from "./IncrementButton.styles";

export const IncrementButton = ({ onClickEvent }) => {
  return <StyledButton onClick={() => onClickEvent()}>+</StyledButton>;
};
