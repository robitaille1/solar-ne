import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const banner = () => {
  return (
    <Banner>
      <div>
        <h2>Financing now available!</h2>
        <NavLink to="/financing">
          <button>Learn More</button>
        </NavLink>
      </div>
    </Banner>
  );
};

export default banner;

const Banner = styled.div`
  position: absolute;
  width: 100vw;
  top: 70px;
  background: #132f0ce0;
  color: white;

  div {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  button {
    height: 50%;
    margin-left: 20px;
    border-radius: 50px;
    padding: 9px 15px;
    background: linear-gradient(89.57deg, #3b8f28, #265e19);
    color: white;
    border: none;
    transition: 0.2s;
    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`;
