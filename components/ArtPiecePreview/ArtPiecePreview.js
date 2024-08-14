import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  background-color: #fff;
  padding: 1vw;
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
            width={500}
            height={300}
          />
          <IconWrapper>
            <FavoriteButton
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          </IconWrapper>
        </ImageWrapper>
      </Link>
      <Title>{title}</Title>
      <h2>{artist}</h2>
    </Section>
  );
}

export default ArtPiecePreview;
