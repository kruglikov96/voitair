import React from "react";
import styled, { css } from "styled-components";
import { COLOR } from "../../styles/color-constants";
import { FlexBox } from "../styled-components/FlexBox";
import Paragraph from "../styled-components/Paragraph";

interface IFigureCardProps {
  title: string;
  percent: string;
  backImage: string;
}

interface IDiagramBoxProps {
  backImage: string;
}

const DiagramBox = styled.div<IDiagramBoxProps>`
  font-size: 92px;
  text-align: center;
  color: ${COLOR.white};
  padding: 43px 0;
  max-width: 296.5px;
  width: 100%;
  background: ${(props) =>
    props.backImage ? css` url(${props.backImage});` : css``};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const FigureCard: React.FC<IFigureCardProps> = ({
  title,
  percent,
  backImage,
}) => {
  return (
    <FlexBox
      flexDirection="column"
      mb="60px"
      maxWidth="296.5px"
      justifyContent="center"
    >
      <Paragraph mb="30px">{title}</Paragraph>
      <DiagramBox backImage={backImage}>{percent}</DiagramBox>
    </FlexBox>
  );
};

export default FigureCard;
