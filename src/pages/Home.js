import React from "react";
import Card from "../components/Card";
import posts from "../data/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Home = () => {

  return (
    <div>
      <div className="header-container">
        <FontAwesomeIcon icon={faInstagram} size="4x" />
        <h1 className="header">Instagram</h1>
      </div>
      <div className="container">
        {posts.map((post) => (
          <div>
            <Card post={post} key={post.code} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
