import React from "react";
import styled from "styled-components";
import Lazyload from "react-lazyload";
import { Link } from "react-router-dom";

const blogItem = (props) => (
  <Wrapper>
    <div>
      <Lazyload>
        <img
          draggable="false"
          alt={props.blog.image.alternativeText}
          src={props.blog.image.formats.thumbnail.url}
          samesite="None"
          secure="true"
        />
      </Lazyload>
      <h3>{props.blog.title}</h3>
      <Link to={`/blog/${props.blog.id}`}>Read more</Link>
    </div>
  </Wrapper>
);

export default blogItem;

const Wrapper = styled.div`
  width: 100%;
  margin: 15px 5px;
  min-height: 200px;
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(231, 225, 225);
  color: black;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.411);
  @media (min-width: 550px) {
    width: 30%;
    margin: 5px 0px;
  }
  div {
    align-self: center;
  }
  h3 {
    font-size: 1rem;
    margin-top: 0;
  }
  img {
    width: 100%;
    margin-bottom: 5px;
  }
  p {
    text-decoration: underline;
    font-size: 12px;
    @media (min-width: 550px) {
      font-size: 15px;
    }

    &:hover {
      cursor: not-allowed;
    }
  }

  a {
    font-size: 100%;
    color: #132f0c;
    transition: 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }
`;
