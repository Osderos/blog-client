import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { formatedDate } from "../utils/dateFormat";
import { fetchComments, fetchPosts } from "../redux";

function Post() {
  const [clicked, setClicked] = useState(false);
  const [likes, setLikes] = useState(0);

  const postData = useSelector((state) => state.post);
  const commentData = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchComments());
    dispatch(fetchPosts());
  }, []);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };

  // const addLike = ()=>{
  //     setLikes(likes )
  // }

  
  const findPost = postData.posts.find(({ _id }) => _id === params.id);
  const findComments = commentData.comments.filter(
    ({ post }) => post === params.id
  );

  const loadingView = (
    <div>
      <h1>Loading...</h1>
    </div>
  );

  const errorPostView = (
    <div>
      <h1>{postData.error}</h1>
    </div>
  );

  const postView = (
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
      <div>
      <h1>Comments</h1>
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


  return postData.loading || commentData.loading
    ? loadingView
    : postData.error
    ? errorPostView
    : postView;
}

export default Post;
