import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const errorSection = () => (
  <>
    <h2>This page does not exist</h2>
    <Link to="/">
      <Button>Return Home</Button>
    </Link>
  </>
);

export default errorSection;

const Button = styled.button`
text-decoration: none;
    &:hover {
      cursor: pointer;
    }
    @media (min-width: 1000px) {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
      transition: 0.3s;
      background: #4b99ad;
      padding: 13px;
      color: #fff;
      border: none;
      margin-left: 20px;
      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
        background: #4691a4;
      }`;
