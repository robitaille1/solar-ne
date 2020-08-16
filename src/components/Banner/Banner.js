import React from "react";
import styled from "styled-components";

const banner = () => {
  return (
    <Banner>
      <div>
        <h2>Financing now available!</h2>
        <button>Learn More</button>
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
  }
`;
