import React from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";

function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button onClick={onToggleFavorite}>
      {isFavorite ? <BookmarkCheck /> : <Bookmark />}
    </button>
  );
}

export default FavoriteButton;
