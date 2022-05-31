import styled, { css } from "styled-components";
import { Theme } from "../../../../styles/theme";

interface IButtonBaseProps {
  primary?: boolean;
  secondary?: boolean;
  moreDetail?: boolean;
  disabled?: boolean;
}

const ButtonBase = styled.button<IButtonBaseProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s all;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.theme as Theme).colors.common.white};
  border: none;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;

  ${(props) =>
    (props.primary || props.secondary) &&
    css`
      padding: 25px 25px;
      max-width: 386px;
    `}

  ${(props) =>
    props.primary &&
    css`
      background: ${(props) => (props.theme as Theme).backgroundButton.primary};
    `}

  ${(props) =>
    props.secondary &&
    css`
      background: ${(props) =>
        (props.theme as Theme).backgroundButton.secondary};
    `}

  ${(props) =>
    props.moreDetail &&
    css`
      border: 0.5px solid
        ${(props) => (props.theme as Theme).colors.common.white};
      padding: 18px 18px;
      max-width: 282px;

      background-color: ${(props) =>
        (props.theme as Theme).backgroundButton.moreDetail};
    `}
`;

export default ButtonBase;
