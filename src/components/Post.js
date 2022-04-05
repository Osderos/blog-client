import React from "react";
import format from "date-fns/format";
import { parseISO } from "date-fns";

export default function Post(props) {
  const formatedDate = format(parseISO(props.date), "iiii-MMMM-yyyy");

  const onlyPublishedPosts = props.published ? (
    <div>
      <h1>{props.title}</h1>
      <p>Written by:{props.author}</p>
      <span>Posted on:{formatedDate}</span>
    </div>
  ) : null;

  return <div>{onlyPublishedPosts}</div>;
}
