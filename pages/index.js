import Spotlight from "@/components/Spotlight";
import Image from "next/image";

export default function SpotlightPage({ pieces }) {
  if (!pieces || pieces.length === 0) {
    return <div>Loading...</div>; // or any other fallback UI
  }
  const spotlightPiece = pieces[Math.floor(Math.random() * pieces.length - 1)];

  return (
    <>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
      />
    </>
  );
}
