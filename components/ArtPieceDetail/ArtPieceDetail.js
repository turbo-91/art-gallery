import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

function ArtPieceDetail({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <Image alt={title} src={image} width={300} height={400} />
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <p>
        {year}, {genre}
      </p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Link href="/art-pieces">Back</Link>
    </>
  );
}

export default ArtPieceDetail;
