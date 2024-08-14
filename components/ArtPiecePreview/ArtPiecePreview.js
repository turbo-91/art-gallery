import React from "react";
import Image from "next/legacy/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  background-color: #fff;
  padding: 2vw;
  overflow: hidden;
  border: 1px solid black;
  border-bottom: 0px;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: auto;
  width: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 1vh;
  right: 1vh;
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

function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <Section>
      <Link href={`./art-pieces/${slug}`} key={slug}>
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
        </ImageWrapper>
      </Link>
      <Artist>{artist}</Artist>
      <Title>{title}</Title>
    </Section>
  );
}

export default ArtPiecePreview;
