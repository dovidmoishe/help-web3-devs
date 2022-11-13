import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { NavBar, Header, Posts, Footer } from "./components";

export default function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const posts = await axios.get("http://localhost:4000/posts");
      setPosts(posts.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Header />
      <Posts GetPosts={fetchPosts} posts={posts} />
      <Footer />
    </div>
  );
}
