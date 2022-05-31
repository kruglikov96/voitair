import React from "react";

import styled, { css } from "styled-components";
import { FlexBox } from "./FlexBox";

interface IContainerProps {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
}

export const Container = styled.div<IContainerProps>`
  max-width: 1218px;
  width: 100%;
  padding: 0px 16px;
  margin: 0 auto;
  display: ${(p) => p.display || "block"};
  align-items: ${(p) => p.alignItems || "center"};
  justify-content: ${(p) => p.justifyContent || "space-between"};
  flex-direction: ${(p) => p.flexDirection || "row"};
`;
