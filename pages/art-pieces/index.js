import ArtPieces from "@/components/ArtPieces/ArtPieces";
import React from "react";

function ArtPiecesPage({
  pieces,
  onToggleFavorite,
  isFavorite,
  addComment,
  artPiecesInfo,
}) {
  return (
    <ArtPieces
      pieces={pieces}
      onToggleFavorite={onToggleFavorite}
      isFavorite={isFavorite}
      addComment={addComment}
      artPiecesInfo={artPiecesInfo}
    ></ArtPieces>
  );
}

export default ArtPiecesPage;
