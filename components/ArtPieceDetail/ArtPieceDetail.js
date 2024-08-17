import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useRouter } from "next/router";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import styled from "styled-components";

const Color = styled.li`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => props.color};
`;

const Section = styled.section`
  max-width: 100% /* Increased max-width for better layout */
  margin: 0 auto;
  padding: 1vw;
  padding-bottom: 2vh;
  display: flex;
  flex-direction: row; /* Horizontal layout */
  align-items: flex-start; /* Align items at the top */
  text-align: left; /* Align text to the left */
  overflow: hidden;
  border: 1px solid black;
   
  
`;

const ContentWrapper = styled.div`
  flex: 1; /* Allows this section to take up available space */
  padding-right: 1vw; /* Added space between content and image */
`;

const CommentWrapper = styled.div`
  flex: 1; /* Allows this section to take up available space */
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px; /* Fixed width for the image */
  height: auto;
  flex-shrink: 0; /* Prevents the image from shrinking */
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 1vh; /* Positioned at 10px from the top */
  right: 1vw;
  z-index: 1; /* Ensures the button layers above the image */
`;

const Title = styled.h2`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 0.9em; /* Reduced font size */
  margin-bottom: 1px;
  color: #001233;
`;

const Artist = styled.h1`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.2em; /* Reduced font size */
  margin-bottom: 8px;
  color: #001233;
`;

const Details = styled.p`
  font-size: 0.9em; /* Reduced font size */
  color: #333;
  margin: 10px 0;
`;

const BackLink = styled(Link)`
  display: block;
  margin-top: 20px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  text-align: right;
  text-decoration: none;
  &:hover {
    transform: translateX(-10px); /* Move 10px to the right */
  }
`;

const ColorList = styled.ul`
  display: flex;
  flex-wrap: wrap; /* Wrap colors to the next line if needed */
  list-style: none;
  padding: 0;
  margin: 10px 0;
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
      <ContentWrapper>
        <Artist>{artist}</Artist>
        <Title>{title}</Title>
        <Details>
          {year}, {genre}
        </Details>
        <ColorList>
          {colors?.map((color, index) => (
            <Color key={index} color={color} aria-label={color} />
          ))}
        </ColorList>
        <CommentWrapper>
          <CommentForm
            addComment={addComment}
            artPiecesInfo={artPiecesInfo}
            slug={slug}
          />
          {comments && <Comments comments={comments} />}
        </CommentWrapper>
      </ContentWrapper>

      <ImageWrapper>
        <Image
          layout="responsive"
          alt={title}
          src={image}
          width={100}
          height={100}
        />
        <IconWrapper>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        </IconWrapper>
        <BackLink href="/art-pieces">← Back</BackLink>
      </ImageWrapper>
    </Section>
  );
}

export default ArtPieceDetail;
