import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import { Theme } from "../../styles/theme";

export const NavLink = styled(RouterLink)`
  position: relative;
  color: ${(props) => (props.theme as Theme).colors.common.white};
  text-decoration: none;
  padding: 0 0 3px 0;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0%;
    transform: translate(0%, 100%);
    width: 0;
    height: 2px;
    opacity: 1;
    background: ${(props) => (props.theme as Theme).colors.secondary.main};
    transition: all 0.5s ease-in-out;
  }

  &.active {
    &::after {
      background: ${(props) => (props.theme as Theme).colors.primary.main};
    }
    &:active {
      &::after {
        background: ${(props) => (props.theme as Theme).colors.primary.main};
      }
    }
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
