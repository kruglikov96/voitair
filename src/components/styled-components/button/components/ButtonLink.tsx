import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

interface ILinkProps {
  href?: string;
  disabled?: boolean;
}

const ButtonLink = styled(RouterLink)<ILinkProps>`
  text-decoration: none;
`;

export default ButtonLink;
