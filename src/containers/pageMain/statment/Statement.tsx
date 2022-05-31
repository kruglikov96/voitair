import React from "react";
import styled, { css } from "styled-components";
import { COLOR } from "../../../styles/color-constants";
import StatementWrapper from "../../../components/common-components/statementWrapper/StatementWrapper";
import StatementImg from "../../../asseets/mainPage/statement/StatementImg.png";
import { TitleH2 } from "../../../components/styled-components/Title";
import { Container } from "../../../components/styled-components/Container";
import { FlexBox } from "../../../components/styled-components/FlexBox";

const Statement: React.FC = () => {
  return (
    <StatementWrapper backImage={StatementImg}>
      <Container>
        <FlexBox justifyContent="flex-end">
          <TitleH2 maxWidth="632px" textAlign="justify">
            Фактором, влияющим на 75% наших эмоций, являются ощущаемые нами
            ЗАПАХИ.
          </TitleH2>
        </FlexBox>
      </Container>
    </StatementWrapper>
  );
};

export default Statement;
