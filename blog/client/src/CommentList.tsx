import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";

function CommentList({ postId }: { postId: string }) {
  const [comments, setComments] = useState({});

  useEffect(() => {
    async function getComments() {
      const comments_response = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );
      setComments(comments_response.data);
    }

    getComments();
  }, []);

  const renderedComments = Object.values<any>(comments).map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}

export default CommentList;
