import React from "react";
import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";

function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <>
      {pieces?.map((piece) => (
        <Link href={`./art-pieces/${piece.slug}`} key={piece.slug}>
          <ArtPiecePreview
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
        </Link>
      ))}
    </>
  );
}

export default ArtPieces;
