import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

function PostList() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    async function getPosts() {
      const posts_response = await axios.get("http://localhost:4002/posts");
      setPosts(posts_response.data);
    }

    getPosts();
  }, []);

  const renderedPosts = Object.values<any>(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
        </div>

        <div className="card-footer">
          <CommentList comments={post.comments} />
        </div>
      </div>
    );
  });

  return (
    <div
      className="d-flex flex-row flex-wrap justify-content-between"
      style={{ width: "100%" }}
    >
      {renderedPosts}
    </div>
  );
}

export default PostList;
