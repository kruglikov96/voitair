import React from "react";
import styled, { css } from "styled-components";
import { COLOR } from "../../../styles/color-constants";

interface IStatementWrapperProps {
  backImage: string;
  backPos?: string;
  children?: React.ReactNode;
}

const StatementWrapperStyle = styled.section<IStatementWrapperProps>`
  background-color: ${COLOR.purpleLigth};
  padding: 393px 0 88px 0;
  background-image: ${(props) =>
    props.backImage && css` url(${props.backImage});`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: ${(p) => p.backPos || "10%"};
`;

const StatementWrapper: React.FC<IStatementWrapperProps> = (props) => {
  return <StatementWrapperStyle {...props}></StatementWrapperStyle>;
};

export default StatementWrapper;
