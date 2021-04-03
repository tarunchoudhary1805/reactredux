import React from "react";
import Post from "./components/Post";
import PostForm from "./components/PostForm";

const App = () => {
  return (
    <div className="App">
      <PostForm />
      <hr />
      <Post />
    </div>
  );
};

export default App;
