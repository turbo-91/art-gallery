import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/art-pieces">Pieces</Link>
      <Link href="/favorites">Favorites</Link>
    </>
  );
}

export default Navigation;
