import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Post = (props) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const post_id = props.match.params.post_id;

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
      .then((res) => setPost([res.data]))
      .catch((err) => console.log(err));
  }, [props.match.params.post_id]);

  const postData = post.length ? (
    post.map((post) => {
      return (
        <div className="center" key={post.id}>
          <h4 className="center">{post.title}</h4>
          <p>{post.body}</p>
        </div>
      );
    })
  ) : (
    <div className="center">
      <h4>No post found !</h4>
    </div>
  );

  return (
    <div className="container">
      {postData}
      <Link
        to="/"
        style={{
          color: "#000",
          textDecoration: "underline",
        }}
      >
        &larr; Back to home
      </Link>
    </div>
  );
};

export default Post;
