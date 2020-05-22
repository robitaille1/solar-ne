import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const jumbotron = () => (
  <Jumbotron>
    <JumboContainer>
      <h2>Invest in your home, community, and local businesses!</h2>
      {/* Photo by American Public Power Association - @publicpowerorg */}
      <div>
        <p>Learn more</p>
        <Link
          to="mainheader"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
        >
          <i className="fas fa-chevron-circle-down"></i>
        </Link>
      </div>
    </JumboContainer>
  </Jumbotron>
);

export default jumbotron;

const Jumbotron = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url(https://i.imgur.com/wnbE8O7.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: scroll;
`;

const JumboContainer = styled.div`
  position: relative;
  text-align: center;
  display: block;
  padding: 10px;
  max-width: 1400px;
  margin: 0px auto;
  h2 {
    font-size: 2em;
    margin-top: 0;
    margin-bottom: 100px;
    @media (min-width: 700px) {
      font-size: 3em;
      margin-bottom: 90px;
    }
  }
  div {
    margin-bottom: 50px;
    @media (min-width: 700px) {
      margin-bottom: 0px;
    }
  }
  p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  i {
    font-size: 50px;
    &:hover {
      color: rgb(202, 202, 202);
      cursor: pointer;
    }
  }
`;
