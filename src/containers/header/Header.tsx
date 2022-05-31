import React from "react";
import { NavLink } from "../../components/styled-components/NavLink";
import { Link } from "react-router-dom";
import { FlexBox } from "../../components/styled-components/FlexBox";
import { ContactInfo } from "./contactInfo/ContactInfo";
import styled from "styled-components";
import { Logo } from "../../components/common-components/layout/Logo";
import { Container } from "../../components/styled-components/Container";

export const HeaderWrapper = styled.header`
  padding: 30px 16px 30px 16px;
  background: linear-gradient(90deg, #000428 0%, #004e92 100%);
  border: none;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container display="flex">
        <Link to="main">
          <Logo />
        </Link>
        <FlexBox maxWidth="590px" width="100%">
          <NavLink to="/marketing">Аромамаркетинг</NavLink>
          <NavLink to="/bussines">Ароматы для бизнеса</NavLink>
          <NavLink to="/equipment">Арома оборудование</NavLink>
        </FlexBox>
        <ContactInfo />
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
