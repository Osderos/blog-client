import React, { useState } from "react";
import uniqid from "uniqid";

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
    try {
 
      const res = await fetch(
        `http://localhost:3000/api/post/${props.postId.id}/comments/create`,
        {
          method: "POST",
          body: JSON.stringify({
            author: msg.author,
            title: msg.title,
            text: msg.text,
            post: props.postId.id,
          }),
        }
      );

      const resJson = await res.json();
      setErrorMsg(resJson.errors);

      if (res.status === 200) {
        setMsg({
          author: "",
          title: "",
          text: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
    setMsg({
      author: "",
      title: "",
      text: "",
    });
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
        {errorMsg.map((err) => (
          <li
            key={uniqid()}
          >
            {err.msg}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentForm;
