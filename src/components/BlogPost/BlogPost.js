import React from "react";
import "./BlogPost.css";
import ReactMarkdown from "react-markdown";

const blogPost = (props) => (
  <main>
    <h2>{props.blog.title}</h2>
    <p style={{ textAlign: "center" }}>By: Andy @ Solar Power NE</p>
    <img src={props.blog.image.url} alt={props.blog.image.alternativeText} />
    <div>
      <ReactMarkdown source={props.blog.content} />
    </div>
  </main>
);

export default blogPost;
