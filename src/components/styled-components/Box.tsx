import React from "react";
import styled, { css } from "styled-components";
import { Theme } from "../../styles/theme";

interface IBoxProps {
  width?: string;
  maxWidth?: string;
  height?: string;
  bcc?: string;
  pdd?: string;
  border?: string;
  borderRadius?: string;
  textAlign?: string;
  primary?: boolean;
  secondary?: boolean;
  display?: string;
  backImage?: string;
}

export const Box = styled.div<IBoxProps>`
  display: ${(p) => p.display || "block"};
  width: ${(p) => p.width || "100%"};
  max-width: ${(p) => p.maxWidth};
  height: ${(p) => p.height}px;
  background-color: ${(p) => p.bcc};
  padding: ${(p) => p.pdd};
  border: ${(p) => p.border};
  position: relative;
  border-radius: ${(p) => p.borderRadius};
  text-align: ${(p) => p.textAlign};
  background-image: ${(props) =>
    props.backImage && css` url(${props.backImage});`};
  background-size: contain;
  background-repeat: no-repeat;
  color: ${(props) => (props.theme as Theme).colors.common.white};

  ${(props) =>
    props.primary &&
    css`
      color: ${(props.theme as Theme).colors.common.black};
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: ${(props.theme as Theme).colors.secondary.main};
    `}
`;
