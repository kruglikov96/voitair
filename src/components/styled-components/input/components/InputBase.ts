import styled, { css } from "styled-components";
import { Theme } from "../../../../styles/theme";

interface IInputBaseProps {
  disabled?: boolean;
  mb?: string;
}

export const InputBase = styled.input<IInputBaseProps>`
  display: block;
  padding: 15px 20px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: ${(props) => props.mb};
  border: 0;
  background: ${(props) => (props.theme as Theme).colors.common.white};
  outline: none;
  appearance: none;

  ${(props) =>
    props.disabled &&
    css`
      border: 1px solid ${(props.theme as Theme).colors.gray.light};
    `}
`;
