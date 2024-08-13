import React from "react";
import Image from "next/image";
import Link from "next/link";

function ArtPieceDetail({ image, title, artist, year, genre, isFavorite }) {
  return (
    <>
      <Image alt={title} src={image} width={300} height={400} />
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <p>
        {year}, {genre}
      </p>
      <Link href="/art-pieces">Back</Link>
    </>
  );
}

export default ArtPieceDetail;
