import Spotlight from "@/components/Spotlight/Spotlight";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 40vw;
  margin: 0 auto;
  padding: 1vw;
  padding-bottom: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpotlightWrapper = styled.div`
  width: 60%;
  height: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
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
