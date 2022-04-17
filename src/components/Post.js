import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { formatedDate } from "../utils/dateFormat";
import { fetchComments, fetchPosts } from "../redux";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

function Post() {
  const postData = useSelector((state) => state.post);
  const commentData = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchComments());
    return () => {
      dispatch(fetchComments());
    };
  }, []);

  useEffect(() => {
    dispatch(fetchPosts());
    return () => {
      dispatch(fetchPosts());
    };
  }, []);

  const findPost = postData.posts.find(({ _id }) => _id === params.id);
  const findComments = commentData.comments.filter(
    ({ postComment }) => postComment === params.id
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

  const postView =
    findPost && findComments ? (
      <div>
        <h1>{findPost.title}</h1>
        <div>
          <p>Article by: {findPost.author}</p>
          <span>Posted on: {formatedDate(findPost.date)}</span>
        </div>
        <div>
          <p>{findPost.text}</p>
        </div>
        <div>
          <h1>Comments</h1>
          {findComments.map((comment) => (
            <Comment
              key={comment._id}
              title={comment.titleComment}
              text={comment.textComment}
              author={comment.authorComment}
              date={comment.date}
              commentId={comment._id}
              like={comment.likeComment}
            />
          ))}
        </div>
      </div>
    ) : null;

  return (
    <div>
      {postData.loading || commentData.loading
        ? loadingView
        : postData.error
        ? errorPostView
        : postView}
      <CommentForm postId={params} />
    </div>
  );
}

export default Post;
