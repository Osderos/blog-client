import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, fetchComments } from "../redux";
import { formatedDate } from "../utils/dateFormat";
import { Link } from "react-router-dom";

import styled from "styled-components";
import bgImg from "../images/PostBackground.png";
import { VisitPostButton } from "../components/Buttons/Button";

function PostContainer() {
  const postData = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
    return () => {
      dispatch(fetchPosts());
      dispatch(fetchComments());
    };
  }, []);

  const publishedPosts = postData.posts.filter(
    ({ isPublished }) => isPublished === true
  );

  return postData.loading ? (
    <h2>Loading</h2>
  ) : postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div>
      <h2>All Posts</h2>
      <div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
        {postData &&
          postData.posts &&
          publishedPosts.map((post) => (
            <Wrapper key={post._id}>
              <h2>{post.title}</h2>
              <p>Written by: {post.author}</p>
              <span>Posted on : {formatedDate(post.date)}</span>
              <Link to={`post/${post._id}`}>
                <VisitPostButton>Check it!</VisitPostButton>
              </Link>
            </Wrapper>
          ))}
      </div>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 25px 100px 25px 25px;
  border: 1px solid white;
  border-radius: 5px;
  background-image: url(${bgImg});
  background-size: cover;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export default PostContainer;
