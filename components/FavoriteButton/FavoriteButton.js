import React from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    resize: inherit;
  }
`;

function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button onClick={onToggleFavorite}>
      {isFavorite ? (
        <BookmarkCheck strokeWidth={1} size={40} />
      ) : (
        <Bookmark strokeWidth={1} size={40} />
      )}
    </Button>
  );
}

export default FavoriteButton;
