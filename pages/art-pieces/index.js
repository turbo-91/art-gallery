import ArtPieces from "@/components/ArtPieces/ArtPieces";
import React from "react";

function ArtPiecesPage({ pieces, onToggleFavorite, isFavorite }) {
  return (
    <ArtPieces
      pieces={pieces}
      onToggleFavorite={onToggleFavorite}
      isFavorite={isFavorite}
    ></ArtPieces>
  );
}

export default ArtPiecesPage;
