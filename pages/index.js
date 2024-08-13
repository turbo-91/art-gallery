import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  if (!pieces || pieces.length === 0) {
    return <div>Loading...</div>; // or any other fallback UI
  }
  const spotlightPiece = pieces[Math.floor(Math.random() * pieces.length - 1)];

  return (
    <>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === spotlightPiece.slug)
            ?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(spotlightPiece.slug)}
      />
    </>
  );
}
