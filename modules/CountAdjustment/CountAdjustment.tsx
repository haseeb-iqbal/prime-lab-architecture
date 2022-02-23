import React from "react";
import { IncrementButton } from "../../components/core/IncrementButton/IncrementButton";
import StyledDiv from "./CountAdjustment.styles";
import counterIncrementAction from "../../store/increment/increment.actions";
import { useSelector, useDispatch } from "react-redux";

const CountAdjustment = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const theFunction = () => {
    dispatch(counterIncrementAction());
    console.log(counter);
  };
  return (
    <StyledDiv>
      <p>{counter}</p>
      <IncrementButton onClickEvent={() => dispatch(theFunction)} />
    </StyledDiv>
  );
};

export default CountAdjustment;
