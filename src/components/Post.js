import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatedDate } from "../utils/dateFormat";

function Post() {
  const postData = useSelector((state) => state.post);
  const params = useParams();
  const findPost = postData.posts.find(({ _id }) => _id === params.id);

  return (
    <div>
      <h1>{findPost.title}</h1>
      <div>
        <p>Article by: {findPost.author}</p>
        <p>Posted on: {formatedDate(findPost.date)}</p>
      </div>
    </div>
  );
}

export default Post;
