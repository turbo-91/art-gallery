import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

function Spotlight({ image, artist, isFavorite, onToggleFavorite }) {
  return (
    <>
      <Image alt={artist} src={image} width={500} height={300} />
      <h2>{artist}</h2>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}

export default Spotlight;
