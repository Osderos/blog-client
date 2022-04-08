import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux";
import { formatedDate } from "../utils/dateFormat";
import { Link } from "react-router-dom";

function PostContainer() {
  const postData = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const publishedPosts = postData.posts.filter(
    ({ isPublished }) => (isPublished === true)
  );

  return postData.loading ? (
    <h2>Loading</h2>
  ) : postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div>
      <h2>All Posts</h2>
      <div>
        {postData &&
          postData.posts &&
          publishedPosts.map((post) => (
            <div key={post._id}>
              <h3>{post.title}</h3>
              <p>Written by: {post.author}</p>
              <span>Posted on : {formatedDate(post.date)}</span>
              <Link to={`post/${post._id}`}>Check it</Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PostContainer;
