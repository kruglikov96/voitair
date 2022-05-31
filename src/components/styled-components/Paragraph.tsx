import styled, { css } from "styled-components";
import { Theme } from "../../styles/theme";

interface IParagraphProps {
  primary?: boolean;
  secondary?: boolean;
  fontSize?: string;
  fontWeight?: string;
  opacity?: string;
  mb?: string;
  maxWidth?: string;
}

const Paragraph = styled.p<IParagraphProps>`
  font-size: ${(p) => p.fontSize || "20px"};
  font-weight: ${(props) => props.fontWeight};
  opacity: ${(props) => props.opacity};
  margin: 0;
  padding: 0;
  margin-bottom: ${(props) => props.mb};
  max-width: ${(props) => props.maxWidth};

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

export default Paragraph;
