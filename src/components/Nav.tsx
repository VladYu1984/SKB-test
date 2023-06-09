import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {Flex} from "./BaseCss/Flex";

const StyledNav = styled.div`
  background: #FFFFFF;
  height: 96px;
  padding: 36px 67px 36px 55px;
  @media(max-width: 865px) {
    padding: 36px 20px;
    font-size: 0.875em
  }
`;

const NavItem = styled.li`
  margin-left: 2.25em;
  &:last-child {
    margin-left: 4em;
  }
  @media(max-width: 865px) {
    margin-left: 1.5em;
    &:last-child {
      margin-left: 2.5em;
    }
  }
`;

export const Nav: React.FC = () => (
  <StyledNav as={Flex}>
      <Image src="/logo.svg" alt="logo" width={108} height={24}/>

      <Flex width={''} height={''} justifyCon={'flex-end'}>
          <NavItem>О методике</NavItem>
          <NavItem>Форматы</NavItem>
          <NavItem>Курсы</NavItem>
          <NavItem className="menu">Войти</NavItem>
        </Flex>

  </StyledNav>
);
