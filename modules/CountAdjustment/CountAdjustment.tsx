import React from "react";
import { IncrementButton } from "../../components/core/IncrementButton/IncrementButton";
import StyledDiv from "./CountAdjustment.styles";
import counterIncrementAction from "../../store/increment/increment.actions";
import { useSelector, useDispatch } from "react-redux";

const CountAdjustment = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const dispatchFunction = () => {
    dispatch(counterIncrementAction());
  };
  return (
    <StyledDiv>
      <p>{counter}</p>
      <IncrementButton onClickEvent={() => dispatch(dispatchFunction)} />
    </StyledDiv>
  );
};

export default CountAdjustment;
