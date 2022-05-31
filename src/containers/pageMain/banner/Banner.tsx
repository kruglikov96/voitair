import React from "react";
import { BannerImage } from "../../../components/page1-components/BannerImage";
import { FlexBox } from "../../../components/styled-components/FlexBox";
import Paragraph from "../../../components/styled-components/Paragraph";
import styled from "styled-components";
import { Container } from "../../../components/styled-components/Container";
import BannerDescription from "../../../components/common-components/bannerDescription/BannerDescription";

const BannerWrapper = styled.section`
  background: linear-gradient(90deg, #000428 0%, #004e92 100%);
  padding: 100px 0 202px 0;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <Container display="flex">
        <BannerDescription
          title="Профессиональная ароматизация помещений"
          parahraph="Подбираем запах как визитную карту вашего бизнеса"
          button="Оставить заявку>>>"
        />
        <BannerImage />
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
