import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2vh;
  border-bottom: 1px solid black;
  margin-bottom: 2vh;
`;

const CommentsList = styled.ul`
  list-style: none; /* Remove default list styling */
  padding: 0;
  margin: 0;
`;

const CommentItem = styled.li`
  margin-bottom: 0.5rem; /* Spacing between comments */
  font-size: 0.8em; /* Smaller font size for comments */
  color: #333; /* Dark text color for readability */
`;
const Timestamp = styled.li`
  margin-bottom: 0.5rem; /* Spacing between comments */
  font-size: 0.1em; /* Smaller font size for comments */
  color: #333; /* Dark text color for readability */
`;

function Comments({ comments }) {
  return (
    <CommentsList>
      {comments.map((comment, index) => (
        <Container key={index}>
          <Timestamp>
            {Date(comment.timestamp).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Timestamp>
          <CommentItem>{comment}</CommentItem>
        </Container>
      ))}
    </CommentsList>
  );
}

export default Comments;
