import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { StyledButton, StyledDiv } from "./index.styles";
import Description from "../../components/Description";
import CountAdjustment from "../../modules/CountAdjustment";
import { API_KEY } from "../../constants/app.constants";
const Dashboard: NextPage = () => {
  const router = useRouter();
  return (
    <StyledDiv>
      <Description />
      <CountAdjustment />
      <b>Your API key is: {API_KEY}</b>
      <StyledButton onClick={() => router.push("/submit")}>
        Go to next page/submit
      </StyledButton>
    </StyledDiv>
  );
};

export default Dashboard;
