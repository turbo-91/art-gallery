import React from "react";
import ArtPiecePreview from "../ArtPiecePreview";

function ArtPieces({ pieces }) {
  return (
    <>
      {pieces?.map((piece) => (
        <div key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
          />
        </div>
      ))}
    </>
  );
}

export default ArtPieces;
