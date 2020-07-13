import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Post = (props) => {
  const handleClick = () => {
    props.deletePost(props.post.id);
    props.history.push("/");
  };

  const postData = props.post ? (
    <div className="center" key={props.post.id}>
      <h4 className="center">{props.post.title}</h4>
      <p>{props.post.body}</p>
      <div className="center">
        <button className="btn grey" onClick={handleClick}>
          Delete post
        </button>
      </div>
    </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id });
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.post_id);

  return {
    post: state.posts.find((post) => post.id === id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
