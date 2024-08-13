import React from "react";

function CommentForm({ addComment, artPiecesInfo, slug }) {
  console.log("beforesubmitcomment", artPiecesInfo);
  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    addComment(slug, comment.value);
    event.target.reset();
    console.log("aftersubmitcomment", artPiecesInfo);
  }
  return (
    <form onSubmit={handleSubmit} aria-label="add comments about art piece">
      <label htmlFor="comment">Add comment:</label>
      <textarea type="text" id="comment" name="comment" rows="3" required />
      <button type="submit">Send</button>
    </form>
  );
}

export default CommentForm;
