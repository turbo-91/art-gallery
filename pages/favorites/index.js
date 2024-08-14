import React from "react";
import ArtPieces from "@/components/ArtPieces/ArtPieces";

function FavoritesPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  isFavorite,
}) {
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );
  return (
    <div>
      <ArtPieces
        pieces={favorites}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        isFavorite={isFavorite}
      />
    </div>
  );
}

export default FavoritesPage;
