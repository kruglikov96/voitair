import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/styled-components/Container";
import RentImg from "../../../asseets/rentSection/RentImg.png";
import { FlexBox } from "../../../components/styled-components/FlexBox";
import BannerDescription from "../../../components/common-components/bannerDescription/BannerDescription";
import { COLOR } from "../../../styles/color-constants";
import { Box } from "../../../components/styled-components/Box";

const RentWrapper = styled.section`
  padding: 332px 0 180px 0;
`;

const Rent = () => {
  return (
    <RentWrapper>
      <Container>
        <FlexBox
          pdd="90px 0 80px 74px"
          alignItems="flex-end"
          bcc={COLOR.grey}
          borderRadius="10px"
          flexWrap="none"
        >
          <BannerDescription
            title="Предлагаем в аренду оборудованиe"
            parahraph="Всего от 3500 рублей в месяц"
            button="Перейти к оборудованию>>>"
          />
          <Box>
            <img
              src={RentImg}
              alt=""
              style={{
                position: "absolute",
                bottom: "0px",
                left: "0px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </FlexBox>
      </Container>
    </RentWrapper>
  );
};

export default Rent;
