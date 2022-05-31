import React from "react";
import styled from "styled-components";
import RequestForm from "./RequestForm";
import { Box } from "../../components/styled-components/Box";
import { Container } from "../../components/styled-components/Container";
import { FlexBox } from "../../components/styled-components/FlexBox";
import Paragraph from "../../components/styled-components/Paragraph";
import { Title } from "../../components/styled-components/Title";
import { COLOR } from "../../styles/color-constants";
import RequestImg from "../../asseets/requestSection/RequestImg.png";

const RequestWrapper = styled.section`
  padding: 85px 0;
  background-color: ${COLOR.purple};
`;

const Request: React.FC = () => {
  return (
    <RequestWrapper>
      <Container>
        <FlexBox alignItems="stretch">
          <RequestForm />
          <Box maxWidth="380px">
            <Title mb="15px">Оставить заявку</Title>
            <Paragraph>
              Если у вас остались вопросы или Вы приняли решение о заказе,
              заполните форму или свяжитесь любым удобным для Вас способом.
            </Paragraph>
          </Box>
          <Box
            maxWidth="350px"
            display="inline-block"
            backImage={RequestImg}
          ></Box>
        </FlexBox>
      </Container>
    </RequestWrapper>
  );
};

export default Request;
