import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  ////////// DATA FETCHING API ////////////
  const fetcher = async (...args) => {
    const response = await fetch(...args);
    if (!response.ok) {
      throw new Error(`Request with ${JSON.stringify(args)} failed.`);
    }
    return await response.json();
  };
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  /////// FAVOR ART PIECES /////////
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  useEffect(() => {
    if (data && artPieces.length === 0) {
      setArtPieces(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  function handleToggleFavorite(slug) {
    // See if the art piece is already in the array
    const info = artPieces.find((art) => art.slug === slug);
    if (info) {
      // If the art piece is already in the array, toggle the isFavorite value
      const newInfo = artPieces.map((artPiece) =>
        artPiece.slug === slug
          ? { ...artPiece, isFavorite: !artPiece.isFavorite }
          : artPiece
      );
      setArtPieces(newInfo);
      console.log("afterClickIf", artPieces);
    } else {
      // If the art piece is not in the array already, add it with the favorite as true
      const newInfo = [...artPieces, { slug, isFavorite: true }];
      setArtPieces(newInfo);
      console.log("afterClickElse", artPieces);
    }
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 1000,
        }}
      >
        {artPieces.length > 0 ? (
          <Component
            {...pageProps}
            pieces={isLoading || error ? [] : data}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={handleToggleFavorite}
          />
        ) : (
          <div>Loading...</div>
        )}
        <Layout />
      </SWRConfig>
    </>
  );
}
