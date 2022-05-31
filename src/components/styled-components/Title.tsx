import styled, { css } from "styled-components";
import { COLOR } from "../../styles/color-constants";

interface ITitleProps {
  primary?: boolean;
  secondary?: boolean;
  fontSize?: string;
  mb?: string;
  maxWidth?: string;
  textAlign?: string;
}

export const Title = styled.h1<ITitleProps>`
  font-family: "Roboto", sans-serif;
  font-size: ${(p) => p.fontSize || "48px"};
  margin-bottom: ${(p) => p.mb};
  padding: 0;
  color: ${COLOR.white};
  max-width: ${(props) => props.maxWidth};
  text-align: ${(p) => p.textAlign};
  font-weight: 500;
`;

export const TitleH2 = styled(Title)`
  font-family: "Montserrat", "Roboto", sans-serif;
  font-size: ${(p) => p.fontSize || "32px"};
  font-weight: 600;
`;
