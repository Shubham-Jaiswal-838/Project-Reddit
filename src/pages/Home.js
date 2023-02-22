import React from "react";
import Navbar from "../components/Navbar";
import PostContainer from "../components/PostContainer";


const Home = () => {
  return (
    <>
      <Navbar />
      <div id="postContainer">
      <PostContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />
      </div>
    </>
  );
};

export default Home;
