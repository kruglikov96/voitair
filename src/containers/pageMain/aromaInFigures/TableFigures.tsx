import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../../components/styled-components/FlexBox";
import FigureCard from "../../../components/page1-components/FigureCard";
import FirstDiagmam from "../../../asseets/mainPage/diagrams/FirstDiagmam.png";
import SecondDiagmam from "../../../asseets/mainPage/diagrams/SecondDiagmam.png";
import ThirdDiagmam from "../../../asseets/mainPage/diagrams/ThirdDiagmam.png";
import FourthDiagram from "../../../asseets/mainPage/diagrams/FourthDiagram.png";
import FifthDiagram from "../../../asseets/mainPage/diagrams/FifthDiagram.png";
import SixthDiagram from "../../../asseets/mainPage/diagrams/SixthDiagram.png";

const TableFigures = () => {
  return (
    <>
      <FlexBox>
        <FigureCard
          title="Лояльность клиентов"
          percent="70%"
          backImage={FirstDiagmam}
        />
        <FigureCard
          title="Время пребывания"
          percent="18%"
          backImage={SecondDiagmam}
        />
        <FigureCard
          title="Готовность покупать "
          percent="16%"
          backImage={ThirdDiagmam}
        />
        <FigureCard
          title="Импульсивность покупок"
          percent="8%"
          backImage={FourthDiagram}
        />
      </FlexBox>
      <FlexBox justifyContent="center">
        <FigureCard
          title="Ошибки персонала"
          percent="-50%"
          backImage={FifthDiagram}
        />
        <FigureCard
          title="Неприятные запахи"
          percent="-100%"
          backImage={SixthDiagram}
        />
      </FlexBox>
    </>
  );
};

export default TableFigures;
