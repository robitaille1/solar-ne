import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Lazyload from "react-lazyload";

const jumbotron = () => (
  <Lazyload>
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
  </Lazyload>
);

export default jumbotron;

const Jumbotron = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);

  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),
    url("https://res.cloudinary.com/robitaille/image/upload/v1603767480/winter_jq2zpw.jpg");

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: scroll;

  @media (min-width: 560px) {
    height: 90vh;
  }
  @media (min-width: 1100px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const JumboContainer = styled.div`
  position: relative;
  text-align: center;
  display: block;
  padding: 10px;
  max-width: 1400px;

  @media (min-width: 700px) {
    text-align: left;
    padding: 100px;
  }
  @media (min-width: 1100px) {
    width: 60%;
    padding: 100px 50px;
    margin: 0px;
  }
  h2 {
    font-size: 2em;
    margin-top: 0;
    margin-bottom: 100px;
    @media (min-width: 700px) {
      font-size: 3em;
      margin-bottom: 90px;
    }
    @media (min-width: 1100px) {
      margin-bottom: 10px;
    }
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  div {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    margin-bottom: 50px;
    text-align: center;
    @media (min-width: 700px) {
      margin-bottom: 0px;
    }
    @media (min-width: 1100px) {
      display: flex;
      flex-direction: column;
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
