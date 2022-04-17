import React, { useState } from "react";
import { formatedDate } from "../utils/dateFormat";

function Comment(props) {
  const [isLiked, setLike] = useState(null);

  const toggleLike = async (e) => {
    setLike(!isLiked);
    const data = {
      commentId: props.commentId,
      commentLikeNumber: props.like,
      isLiked: isLiked,
    };
    try {
      const req = await fetch("http://localhost:3000/api/post/comments/like", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const resJson = await req.json();
      console.log(resJson.message);
      window.location.reload()
      setLike(resJson.message) ;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h3>{props.title}</h3>
      <span>Likes: {props.like}</span>
      <span onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-minus"></i>
        ) : (
          <i className="fa-solid fa-plus"></i>
        )}
      </span>
      <p>{props.text}</p>
      <p>By: {props.author}</p>
      <span>On: {formatedDate(props.date)}</span>
    </div>
  );
}

export default Comment;
