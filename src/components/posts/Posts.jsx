import React, { useState } from "react";
import "./Posts.css";
import { Box, Modal } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";
const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Posts({ GetPosts, posts }) {
  const [postModal, setPostModal] = useState(false);
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [address, setAddress] = useState("");
  const [github, setGithub] = useState("");

  const handleModal = () => setPostModal(!postModal);
  let userGithubUrl;
  let userEmail;
  posts.map((post) => {
    return (userGithubUrl = `https://github.com/${post.github}`);
  });
  posts.map((post) => {
    return (userEmail = `mailto:${post.emailOfDeveloper}`);
  });

  const createPost = async (e) => {
    e.preventDefault();
    const information = {
      name: Name,
      emailOfDeveloper: email,
      text: text,
      address: address,
      github: github,
    };
    await axios
      .post("http://localhost:4000/posts/create", information)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });

    handleModal();
    GetPosts();
  };
  return (
    <>
      <Modal
        open={postModal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <form className="create-post-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label htmlFor="github">Your Github username</label>
            <input
              type="text"
              id="github"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
            <br />
            <label htmlFor="address">Your etherum address</label>
            <input
              type="text"
              id="name"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <label htmlFor="text">Why do you need testnet ether?</label>
            <textarea
              id="text"
              cols={30}
              rows={5}
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <br />

            <input type="submit" value="Submit" onClick={createPost} />
          </form>
        </Box>
      </Modal>
      <div className="Posts">
        <div className="post-header">
          <h1>Posts</h1>

          <button onClick={handleModal}>Create Post</button>
        </div>
        <div className="posts">
          {posts.map((post) => (
            <div key={post._id} address={post.address} className="post">
              <div className="name">
                <b>{post.name}</b>
              </div>

              <div className="text">{post.text}</div>
              <div className="dev-socials">
                <h4>Let's connect</h4>
                <div className="icons">
                  <a href={userGithubUrl}>
                    <GitHubIcon />
                  </a>
                  <a href={userEmail}>
                    <EmailIcon />
                  </a>
                </div>
              </div>
              <div className="date">
                Posted on {new Date(post.createdAt).toDateString()}
              </div>
              <div className="send-btn">
                <button>Send ETH to {post.name}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
