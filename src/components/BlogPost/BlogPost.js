import React from "react";
import "./BlogPost.css";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Link } from "react-router-dom";

const blogPost = (props) => (
  <main>
    <h2>{props.blog.title}</h2>
    <img
      style={{ maxWidth: "100%", width: "50%" }}
      src={props.blog.image.url}
      alt={props.blog.image.alternativeText}
    />
    <BlogContent>
      <ReactMarkdown source={props.blog.content} />
    </BlogContent>

    <Link to="/">Home</Link>
    <br />
    <Link to="/blogs">All Blogs</Link>
  </main>
);

export default blogPost;

const BlogContent = styled.div`
  padding-bottom: 20px;

  img {
    max-width: 100%;
  }

  p {
    display: inline-block;
    img {
      justify-self: center;
    }
  }
`;
