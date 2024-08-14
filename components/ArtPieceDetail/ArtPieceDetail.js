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

const Section = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 1vw;
  padding-bottom: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  border: 1px solid black;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 1vh;
  right: 10px;
  z-index: 1; /* Ensures the button layers above the image */
`;

const Title = styled.h2`
  font-family: Helvetica, Arial;
  font-size: 1em;
  margin-bottom: 1px;
  color: #001233;
  text-align: justify;
`;

const Artist = styled.h1`
  font-family: Helvetica, Arial;
  font-size: 1.3em;
  margin-bottom: 8px;
  color: #001233;
  text-align: justify;
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
    <Section>
      <ImageWrapper>
        <Image
          layout="responsive"
          alt={title}
          src={image}
          width={300}
          height={300}
        />
        <IconWrapper>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        </IconWrapper>
      </ImageWrapper>

      <Title>{title}</Title>
      <Artist>{artist}</Artist>
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
    </Section>
  );
}

export default ArtPieceDetail;
