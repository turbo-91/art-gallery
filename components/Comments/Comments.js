import React from "react";

function Comments({ comments }) {
  return (
    <ul className="comments">
      {comments.map((comment, index) => {
        return <li key={index}>{comment}</li>;
      })}
    </ul>
  );
}

export default Comments;
