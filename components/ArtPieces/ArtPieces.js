import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";

const Container = styled.div`
  max-width: 30%;
  margin: 0 auto;
  padding: 1vw;
  padding-bottom: 6vh;
`;

function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite, addComment }) {
  return (
    <Container>
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
          addComment={addComment}
        />
      ))}
    </Container>
  );
}

export default ArtPieces;
