import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/styled-components/Container";
import { TitleH2 } from "../../../components/styled-components/Title";
import TableFigures from "./TableFigures";

const AromaInFiguresWrapper = styled.section`
  padding: 180px 0 120px 0;
`;

const AromaInFigures = () => {
  return (
    <AromaInFiguresWrapper>
      <Container display="flex" flexDirection="column">
        <TitleH2 mb="100px">Аромамаркетинг в цифрах</TitleH2>
        <TableFigures />
      </Container>
    </AromaInFiguresWrapper>
  );
};

export default AromaInFigures;
