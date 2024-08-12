import React from "react";
import Image from "next/image";

function Spotlight({ image, artist }) {
  return (
    <>
      <Image alt={artist} src={image} width={500} height={300} />
      <h2>{artist}</h2>
    </>
  );
}

export default Spotlight;
