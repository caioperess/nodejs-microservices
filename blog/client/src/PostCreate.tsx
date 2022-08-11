import axios from "axios";
import React, { FormEvent, useState } from "react";

function PostCreate() {
  const [title, setTitle] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/post", { title });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="postName">Title</label>
          <input
            id="postName"
            className="form-control"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.currentTarget.value)}
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PostCreate;
