import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
  console.log(props);

  const { posts } = props;
  const postList = posts.length ? (
    posts.map((post) => {
      return (
        <div className="post card" key={post.id}>
          <div className="card-content">
            <Link to={`/posts/${post.id}`} className="card-title blue-text">
              {post.title}
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">No post</div>
  );

  return (
    <div className="container">
      <h4 className="center">Halo, ini halaman home</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        laboriosam magnam accusamus tenetur aliquid autem vel vitae cupiditate
        quia quibusdam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
        reprehenderit, quisquam aspernatur amet voluptatibus officia similique
        adipisci voluptatem eius. Odio dicta sapiente iure, earum ipsa ratione
        recusandae minus aspernatur vitae et iste atque expedita dolores, veniam
        officiis. Hic aspernatur repellat, beatae nemo quibusdam debitis
        molestiae suscipit vitae maiores amet!
      </p>
      {postList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
