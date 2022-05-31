import React from "react";
import Advantages from "../../containers/pageMain/advantages/Advantages";
import Banner from "../../containers/pageMain/banner/Banner";
import Services from "../../containers/pageMain/services/Services";
import styled from "styled-components";
import AromaInFigures from "../../containers/pageMain/aromaInFigures/AromaInFigures";
import Statement from "../../containers/pageMain/statment/Statement";
import Rent from "../../containers/pageMain/rent/Rent";
import Request from "../../containers/request/Request";

const CommonWrapper = styled.section`
  background-color: #01031b;
`;

const MainPage = () => {
  return (
    <>
      <Banner />
      <CommonWrapper>
        <Advantages />
        <Services />
        <AromaInFigures />
        <Statement />
        <Rent />
      </CommonWrapper>
      <Request />
    </>
  );
};

export default MainPage;
