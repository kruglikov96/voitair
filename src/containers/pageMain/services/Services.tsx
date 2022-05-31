import React from "react";
import styled from "styled-components";
import Service from "../../../components/page1-components/Service";
import { Container } from "../../../components/styled-components/Container";
import { SERVICES } from "./mock-data";

const ServicesWrapper = styled.section`
  background-color: rgb(98, 24, 255, 0.1);
  padding: 100px 0 30px 0;
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <Container display="flex" flexDirection="column">
        {SERVICES.map(({ serviceName, description, btnProps }) => {
          return (
            <Service
              serviceName={serviceName}
              description={description}
              btnProps={btnProps}
            ></Service>
          );
        })}
      </Container>
    </ServicesWrapper>
  );
};

export default Services;
