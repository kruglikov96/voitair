import styled, { css } from "styled-components";
import { Theme } from "../../../../styles/theme";

interface IInputBaseProps {
  disabled?: boolean;
  mb?: string;
  minHeight?: string;
}

export const TextAreaBase = styled.textarea<IInputBaseProps>`
  display: block;
  padding: 15px 20px;
  width: 100%;
  min-height: ${(props) => props.minHeight};
  border-radius: 4px;
  margin-bottom: ${(props) => props.mb};
  border: 0;
  background: ${(props) => (props.theme as Theme).colors.common.white};
  outline: none;
  appearance: none;
  resize: none;
  ${(props) =>
    props.disabled &&
    css`
      border: 1px solid ${(props.theme as Theme).colors.gray.light};
    `};
`;
