import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";

function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      {" "}
      <Link href={`./art-pieces/${slug}`} key={slug}>
        <Image alt={title} src={image} width={500} height={300}></Image>
      </Link>
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}

export default ArtPiecePreview;
