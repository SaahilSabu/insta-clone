import React from "react";

const Card = ({ post }) => {
  const [likes, setLikes] = React.useState(post.likes);

  const handleLike = () => {
    if (post.likes === likes) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="username">
          <p>{post.code}</p>
        </div>
        <div>
          <img alt="post" className="postImage" src={post.display_src} />
        </div>
        <div className="status">
          <div className="icons">
            <img
              src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Heart-128.png"
              alt=""
              onClick={handleLike}
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Chat_bubble-128.png"
              alt=""
            />
          </div>
          <div className="likes">
            <p>{post.likes} likes</p>
          </div>
          <div className="caption">
            <span>
              <b> {post.caption} </b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
