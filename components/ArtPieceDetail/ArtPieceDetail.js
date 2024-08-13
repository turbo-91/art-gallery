import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useRouter } from "next/router";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

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
      <Link href="/art-pieces">Back</Link>
    </>
  );
}

export default ArtPieceDetail;
