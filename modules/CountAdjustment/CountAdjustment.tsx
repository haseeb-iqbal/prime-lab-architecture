import React from "react";
import { IncrementButton } from "../../components/core/IncrementButton/IncrementButton";
import StyledDiv from "./CountAdjustment.styles";
import store from "../../store/increment/increment.slice";
import counterIncrementAction from "../../store/increment/increment.actions";
export const CountAdjustment = () => {
  function theFunction() {
    store.dispatch(counterIncrementAction);
    console.log(store.getState());
  }
  return (
    <StyledDiv>
      <IncrementButton onClickEvent={() => theFunction()} />
    </StyledDiv>
  );
};
