import React from "react";
import "./BlogPost.css";

const blogPost = (props) => (
  <main>
    <h2>{props.blog.title}</h2>
    <p>By: {props.blog.author}</p>
    <p>{props.blog.date}</p>
    <img src={props.blog.img} alt={props.blog.alt} />
    <div>
      <p>{props.blog.content}</p>
    </div>
    {props.blog.asset === "" ? null : (
      <img src={props.blog.asset.table} alt="blog asset" />
    )}
  </main>
);

export default blogPost;
