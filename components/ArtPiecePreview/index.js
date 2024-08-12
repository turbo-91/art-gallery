import React from "react";
import Image from "next/image";

function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image alt={title} src={image} width={500} height={300}></Image>
      <h1>{title}</h1>
      <h2>{artist}</h2>
    </>
  );
}

export default ArtPiecePreview;
