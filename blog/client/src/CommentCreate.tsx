import axios from "axios";
import React, { FormEvent, useState } from "react";

function CommentCreate({ postId }: { postId: string }) {
  const [content, setContent] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="commentName">New Comment</label>
          <input
            id="commentName"
            className="form-control"
            type="text"
            value={content}
            onChange={(event) => setContent(event.currentTarget.value)}
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CommentCreate;
