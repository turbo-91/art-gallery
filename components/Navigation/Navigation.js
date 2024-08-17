Navigation.js;

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const NavBar = styled.footer`
  position: fixed;
  width: 100%;
  height: 8vh;
  bottom: 0;
  background-color: white;
  border-top: 1px solid #001233;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const Title = styled.h1`
  font-family: Helvetica, Arial;
  font-size: 1.5em;

  color: #001233;
  text-align: justify;
  @media (max-width: 390px) {
    font-size: 1.1em;
`;

const NavLink = styled(Link)`
  font-family: Helvetica, Arial;
  font-size: 1.3em;
  color: #001233;
  text-align: justify;
  text-decoration: none;
  &:hover {
    transform: translateX(10px); /* Move 10px to the right */
  }
  @media (max-width: 390px) {
    font-size: 0.8em;
  }
`;

function Navigation() {
  return (
    <NavBar>
      <Title>ART GALLERY</Title>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/art-pieces">Pieces</NavLink>
      <NavLink href="/favorites">Favorites</NavLink>
    </NavBar>
  );
}

export default Navigation;
