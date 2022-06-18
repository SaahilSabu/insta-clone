import React from "react";
import { useParams } from "react-router-dom";
import comments from "../data/comments";
import posts from "../data/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((post) => post.code === id);
  const [user, setUser] = React.useState([]);
  const [text, setText] = React.useState([]);
  const [tempUser, setTempUser] = React.useState("");
  const [tempText, setTempText] = React.useState("");
  const [likes, setLikes] = React.useState(post.likes);

  const handleChange = (e) => {
    setUser([...user, tempUser]);
    setText([...text, tempText]);
    setTempUser("");
    setTempText("");
  };
  const handleLike = () => {
    if (post.likes === likes) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  };

  return (
    <div>
      <div className="header-container">
        <FontAwesomeIcon icon={faInstagram} size="4x" />
        <h1 className="header" onClick={() => navigate("/")}>
          Instagram
        </h1>
      </div>
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
              <p>{likes} likes</p>
            </div>
            <div className="caption">
              <span>
                <b> {post.caption} </b>
              </span>
            </div>
          </div>
        </div>
        <div className="comments">
          <div>
            {comments[id]
              ? comments[id].map((comment) => (
                  <div key={comment.user}>
                    {comment.user} : {comment.text}
                  </div>
                ))
              : " "}
            <div>
              {user.map((user, index) => (
                <div key={index}>
                  <span>
                    <b>{user}</b>
                  </span>
                  <span>: {text[index]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="comment-input">
            <input
              className="user-input"
              type="text"
              placeholder="Username"
              value={tempUser}
              onChange={(e) => setTempUser(e.target.value)}
            />
            <input
              className="text-input"
              type="text"
              placeholder="Add a comment..."
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
            />
            <button onClick={handleChange}>
              <FontAwesomeIcon icon={faPaperPlane} size="2x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
