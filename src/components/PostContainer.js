import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux";
import format from "date-fns/format";
import { parseISO } from "date-fns";

function PostContainer() {
  const postData = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const formatedDate = (param) => {
    return format(parseISO(param), "dd 'of' MMMM-yyyy");
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

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
          postData.posts.map((post) => (
            <div key={post._id}>
              <h3>{post.title}</h3>
              <p>Written by: {post.author}</p>
              <span>Posted on : {formatedDate(post.date)}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PostContainer;
