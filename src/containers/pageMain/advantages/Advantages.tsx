import React from "react";
import styled from "styled-components";
import AdvantageCard from "../../../components/page1-components/AdvantageCard";
import { Container } from "../../../components/styled-components/Container";
import { FlexBox } from "../../../components/styled-components/FlexBox";
import { ADVANTAGES } from "./mock-data";

import { TitleH2 } from "../../../components/styled-components/Title";

const AdvantagesWrapper = styled.section`
  padding: 180px 0;
`;

const Advantages = () => {
  return (
    <AdvantagesWrapper>
      <Container display="flex" flexDirection="column">
        <TitleH2 mb="100px">Почему выбирают нас</TitleH2>
        <FlexBox alignItems="stretch">
          {ADVANTAGES.map(({ icon, title, description }) => {
            return (
              <AdvantageCard
                icon={icon}
                title={title}
                description={description}
              />
            );
          })}

          {/* <AdvantageCard
            icon={SpecificationIcon}
            title="Спецификация"
            description="Компания прошла сертификацию бизнес ароматов для помещений производства VoitAir и получила Российский сертификат соответствия."
          />
          <AdvantageCard
            icon={KeyIcon}
            title="Множество решений"
            description="- Парковки 
            - Автобусы 
            - Дома престарелых 
            - Больницы
            - Офисы
            - Частные дома и т.д."
          />
          <AdvantageCard
            icon={CrownIcon}
            title="Уникальность"
            description="Мы создаем прекрасные Настроения, Моменты и Воспоминания."
          />
          <AdvantageCard
            icon={FireIcon}
            title="Качество ароматов"
            description="100% натуральный аромат, не содержит спирт и воду."
          /> */}
        </FlexBox>
      </Container>
    </AdvantagesWrapper>
  );
};

export default Advantages;
