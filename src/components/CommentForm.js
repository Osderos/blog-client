import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";

function CommentForm(props) {
  const [msg, setMsg] = useState({
    author: "",
    title: "",
    text: "",
  });
  const [errorMsg, setErrorMsg] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMsg({ ...msg, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      authorComment: msg.author,
      titleComment: msg.title,
      textComment: msg.text,
      postComment: props.postId,
    };
    try {
      const req = await fetch(
        "http://localhost:3000/api/post/comments/create",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );

      const resJson = await req.json();
      setErrorMsg(resJson.errors);

      if (req.status === 200) {
        setMsg({
          author: "",
          title: "",
          text: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>Leave a comment:</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={msg.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={msg.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="text"></label>
          <textarea
            id="text"
            name="text"
            value={msg.text}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add comment</button>
      </form>
      <ul>
        {errorMsg
          ? errorMsg.map((err) => <li key={uniqid()}>{err.msg}</li>)
          : null}
      </ul>
    </div>
  );
}

export default CommentForm;
