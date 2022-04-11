import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatedDate } from "../utils/dateFormat";

function Post() {
  const [clicked, setClicked] = useState(false);
  const [likes, setLikes] = useState(0);


  

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };

  // const addLike = ()=>{
  //     setLikes(likes )
  // }

  const postData = useSelector((state) => state.post);
  const commentData = useSelector((state) => state.comment);
  const params = useParams();
  const findPost = postData.posts.find(({ _id }) => _id === params.id);
  const findComments = commentData.comments.filter(
    ({ post }) => post === params.id
  );
  console.log(findComments);

  return (
    <div>
      <h1>{findPost.title}</h1>
      <div>
        <p>Article by: {findPost.author}</p>
        <span>Posted on: {formatedDate(findPost.date)}</span>
        <p>Likes: {likes}</p>
      </div>
      <div>
        <p>{findPost.text}</p>
      </div>
      <h1>Comments</h1>
      <div>
        {findComments.map((comment) => (
          <div key={comment._id}>
            <h3>{comment.title}</h3>
            <p>{comment.text}</p>
            <p>By: {comment.author}</p>
            <span>On: {formatedDate(comment.date)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
