CommentForm;

import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column; /* Arrange label, textarea, and button vertically */
  max-width: 30vw; /* Limit form width */
  margin-top: 3vw;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.7rem;
`;

const Textarea = styled.textarea`
  margin-bottom: 0.2rem; /* Space between textarea and button */
  padding: 0.2rem;
  border: 1px solid black; /* Light border */
  font-size: 0.5em; /* Slightly smaller font size */
  resize: none;
  font-family: Helvetica, Arial;
`;

const Button = styled.button`
  align-self: flex-end; /* Align button to the left */
  padding: 0.2rem 0.2rem; /* Padding for button */
  background-color: black; /* Primary color for the button */
  color: white; /* Text color for the button */
  border: none; /* Remove default border */
  font-size: 0.9em; /* Slightly smaller font size */
  cursor: pointer; /* Pointer cursor on hover */

  &:hover {
    transform: translateX(5px); /* Move 5px to the right */
  }
`;

function CommentForm({ addComment, artPiecesInfo, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { comment_content, comment_user } = event.target.elements;
    let comment = {
      user: comment_user.value,
      content: comment_content.value,
    };
    addComment(slug, comment);
    event.target.reset();
    console.log(comment);
  }

  return (
    <Form onSubmit={handleSubmit} aria-label="add comments about art piece">
      <Textarea
        placeholder="Your name"
        id="comment_user"
        name="comment_user"
        rows="1"
        required
      />
      <Textarea
        placeholder="Add a comment"
        id="comment_content"
        name="comment_content"
        rows="3"
        required
      />
      <Button type="submit">Send</Button>
    </Form>
  );
}

export default CommentForm;
