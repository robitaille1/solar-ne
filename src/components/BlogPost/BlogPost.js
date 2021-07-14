import React from "react";
import "./BlogPost.css";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Link } from "react-router-dom";

const blogPost = (props) => (
  <main>
    <h2>{props.blog[0].title}</h2>
    <img
      style={{ maxWidth: "100%", width: "50%" }}
      src={props.blog[0].image.url}
      alt={props.blog[0].image.alternativeText}
    />
    <BlogContent>
      <ReactMarkdown linkTarget="_blank" source={props.blog[0].content} />
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
    text-align: center;
    img {
      justify-self: center;
      width: 50%;
    }
  }
`;
