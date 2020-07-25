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
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url(https://envato-shoebox-0.imgix.net/602c/4a68-8a1b-4c9c-b304-d00a9a91d879/15870.JPG?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=4cf94de07cd410c60223a765e36a2a36);

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
  @media (min-width: 700px) {
    text-align: left;
    padding: 100px;
  }
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
    text-align: center;
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
