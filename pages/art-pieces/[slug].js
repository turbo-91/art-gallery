import ArtPieceDetail from "@/components/ArtPieceDetail/ArtPieceDetail";
import React from "react";
import { useRouter } from "next/router";

function getIsFavoriteStatus(piece, artPiecesInfo) {
  const hasFavoriteInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === piece.slug
  );
  return hasFavoriteInfo ? hasFavoriteInfo.isFavorite : false;
}

function ArtPieceDetailPage({ pieces, onToggleFavorite, artPiecesInfo }) {
  // Dynamic Routing
  const router = useRouter();
  const { slug } = router.query;
  const currentPiece = pieces.find((piece) => piece.slug === slug);
  const isFavorite = getIsFavoriteStatus(currentPiece, artPiecesInfo);
  return (
    <ArtPieceDetail
      image={currentPiece.imageSource}
      title={currentPiece.name}
      artist={currentPiece.artist}
      year={currentPiece.year}
      genre={currentPiece.genre}
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
    />
  );
}

export default ArtPieceDetailPage;
