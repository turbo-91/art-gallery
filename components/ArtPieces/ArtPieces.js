import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <>
      {pieces?.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          artist={piece.artist}
          title={piece.name}
          slug={piece.slug}
          isFavorite={
            artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
              ?.isFavorite
          }
          onToggleFavorite={() => onToggleFavorite(piece.slug)}
        />
      ))}
    </>
  );
}

export default ArtPieces;
