import ArtPieceDetail from "@/components/ArtPieceDetail";
import React from "react";
import { useRouter } from "next/router";

function ArtPieceDetailPage({ pieces }) {
  // Dynamic Routing
  const router = useRouter();
  const { slug } = router.query;
  const currentPiece = pieces.find((piece) => piece.slug === slug);
  return (
    <ArtPieceDetail
      image={currentPiece.imageSource}
      title={currentPiece.name}
      artist={currentPiece.artist}
      year={currentPiece.year}
      genre={currentPiece.genre}
    />
  );
}

export default ArtPieceDetailPage;
