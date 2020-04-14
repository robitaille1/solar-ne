import React from "react";
import styled from "styled-components";

const blogItem = (props) => (
  <Wrapper>
    <div>
      <img
        alt={props.blog.alt}
        src={props.blog.img}
        samesite="None"
        secure="true"
      />
      <h3>{props.blog.title}</h3>
      <p>Coming Soon</p>
    </div>
  </Wrapper>
);

export default blogItem;

const Wrapper = styled.div`
  width: 100%;
  margin: 5px 0px;
  min-height: 200px;
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(231, 225, 225);
  color: black;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.411);
  @media (min-width: 550px) {
    width: 30%;
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
  }
`;
