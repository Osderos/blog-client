import React from "react";
import format from "date-fns/format";
import { parseISO } from "date-fns";
import { Link } from "react-router-dom";

export default function Post(props) {
  const formatedDate = format(parseISO(props.date), "do 'of' MMMM-yyyy");

  const onlyPublishedPosts = props.published ? (
    <div>
      <h1>{props.title}</h1>
      <p>Written by:{props.author}</p>
      <span>Posted on:{formatedDate}</span>
      <Link to={`/post/${props.postId}`}>Check it out</Link>
    </div>
  ) : null;

  return <div>{onlyPublishedPosts}</div>;
}
