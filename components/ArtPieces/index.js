import React from "react";
import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";

function ArtPieces({ pieces }) {
  return (
    <>
      {pieces?.map((piece) => (
        <Link href={`./art-pieces/${piece.slug}`} key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
          />
        </Link>
      ))}
    </>
  );
}

export default ArtPieces;
