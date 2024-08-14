import React from "react";
import Image from "next/legacy/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  background-color: #fff;
  padding: 2vw;
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

function Spotlight({ image, artist, isFavorite, onToggleFavorite }) {
  return (
    <Section>
      <ImageWrapper>
        <Image
          layout="responsive"
          alt={artist}
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
      <Artist>{artist}</Artist>
    </Section>
  );
}

export default Spotlight;
