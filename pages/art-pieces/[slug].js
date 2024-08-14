import ArtPieceDetail from "@/components/ArtPieceDetail/ArtPieceDetail";
import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1vw;
  padding-bottom: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailWrapper = styled.div`
  width: 30%;
  height: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

function getIsFavoriteStatus(piece, artPiecesInfo, colors) {
  const hasFavoriteInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === piece.slug
  );
  return hasFavoriteInfo ? hasFavoriteInfo.isFavorite : false;
}

function ArtPieceDetailPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  addComment,
}) {
  // Dynamic Routing
  const router = useRouter();
  const { slug } = router.query;
  const currentPiece = pieces.find((piece) => piece.slug === slug);
  const isFavorite = getIsFavoriteStatus(currentPiece, artPiecesInfo);
  return (
    <Container>
      <DetailWrapper>
        <ArtPieceDetail
          image={currentPiece.imageSource}
          title={currentPiece.name}
          artist={currentPiece.artist}
          year={currentPiece.year}
          genre={currentPiece.genre}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          addComment={addComment}
          artPiecesInfo={artPiecesInfo}
          colors={currentPiece.colors}
        />
      </DetailWrapper>
    </Container>
  );
}

export default ArtPieceDetailPage;
