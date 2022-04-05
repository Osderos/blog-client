import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getPosts } from "../utils/getData";

function Main() {
  const [authors, setAuthors] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("Main component did mount");
    const loadPosts = async () => {
      setPosts(await getPosts());
    };

    loadPosts();
  }, []);

  const listPosts = posts.map((post) => (
    <Post title={post.title} author={post.author} date={post.date} key={post._id} published={post.isPublished} postId={post._id}/>
  ));

  return <div>{listPosts}</div>;
}

export default Main;
