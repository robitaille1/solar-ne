import React from "react";
import "./BlogPost.css";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const blogPost = (props) => (
  <main>
    <h2>{props.blog.title}</h2>
    <p style={{ textAlign: "center" }}>By: Andy @ Solar Power NE</p>
    <img
      style={{ maxWidth: "100%" }}
      src={props.blog.image.url}
      alt={props.blog.image.alternativeText}
    />
    <BlogContent>
      <ReactMarkdown source={props.blog.content} />
    </BlogContent>
  </main>
);

export default blogPost;

const BlogContent = styled.div`
  padding-bottom: 20px;

  img {
    max-width: 100%;
  }
`;
