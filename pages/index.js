import Spotlight from "@/components/Spotlight/Spotlight";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: 1vw;
  padding-bottom: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpotlightWrapper = styled.div`
  height: auto;
  width: 60%;
`;

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  if (!pieces || pieces.length === 0) {
    return <div>Loading...</div>;
  }
  const spotlightPiece = pieces[Math.floor(Math.random() * pieces.length - 1)];

  return (
    <Container>
      <SpotlightWrapper>
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
          isFavorite={
            artPiecesInfo.find((piece) => piece.slug === spotlightPiece.slug)
              ?.isFavorite
          }
          onToggleFavorite={() => onToggleFavorite(spotlightPiece.slug)}
        />
      </SpotlightWrapper>
    </Container>
  );
}
