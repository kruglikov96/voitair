import styled, { css } from "styled-components";
import { Theme } from "../../styles/theme";

interface IFlexBoxProps {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  maxWidth?: string;
  width?: string;
  bcc?: string;
  pdd?: string;
  mb?: string;
  borderRadius?: string;
  flexWrap?: string;
}

export const FlexBox = styled.div<IFlexBoxProps>`
  display: flex;
  align-items: ${(p) => p.alignItems || "center"};
  justify-content: ${(p) => p.justifyContent || "space-between"};
  flex-direction: ${(p) => p.flexDirection || "row"};
  max-width: ${(p) => p.maxWidth};
  width: ${(p) => p.width || "100%"};
  background-color: ${(p) => p.bcc};
  padding: ${(p) => p.pdd};
  margin-bottom: ${(p) => p.mb};
  border-radius: ${(props) => props.borderRadius};
  flex-wrap: ${(p) => p.flexWrap || "wrap"};
`;
