import React from "react";
import "./BlogPost.css";

const blogPost = props => (
  <main className="BlogPost">
    <h2>{props.blog.title}</h2>
    <p>By: {props.blog.author}</p>
    <p>{props.blog.date}</p>
    <img className="blog-img" src={props.blog.img} alt={props.blog.alt} />
    <div className="blog-content">
      <p>{props.blog.content}</p>
    </div>
    {props.blog.asset === "" ? null : (
      <img className="asset" src={props.blog.asset.table} alt="blog asset" />
    )}
  </main>
);

export default blogPost;
