import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useRouter } from "next/router";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import styled from "styled-components";

const Color = styled.li`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.color};
  border-radius: 20%;
`;

function ArtPieceDetail({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
  artPiecesInfo,
  addComment,
  colors,
}) {
  const router = useRouter();
  const { slug } = router.query;
  function getCommentsForArtPiece(slug, artPiecesInfo) {
    const artPiece = artPiecesInfo?.find((artPiece) => artPiece.slug === slug);
    return artPiece?.comments || [];
  }
  const comments = getCommentsForArtPiece(slug, artPiecesInfo);

  return (
    <>
      <Image alt={title} src={image} width={300} height={400} />
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <p>
        {year}, {genre}
      </p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      {comments && <Comments comments={comments} />}
      <CommentForm
        addComment={addComment}
        artPiecesInfo={artPiecesInfo}
        slug={slug}
      />
      <li>
        {colors?.map((color, index) => (
          <Color key={index} color={color} aria-label={color} />
        ))}
      </li>
      <Link href="/art-pieces">Back</Link>
    </>
  );
}

export default ArtPieceDetail;
