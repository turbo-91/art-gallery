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

function Navigation() {
  return (
    <NavBar>
      <Link href="/">Home</Link>
      <Link href="/art-pieces">Pieces</Link>
      <Link href="/favorites">Favorites</Link>
    </NavBar>
  );
}

export default Navigation;
