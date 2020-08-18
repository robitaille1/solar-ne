import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import oldFlag from "../../assets/flags/oldflag.gif";
import newFlag from "../../assets/flags/newflag.png";
import logo from "../../assets/logo.png";
import Lazyload from "react-lazyload";

const footer = () => {
  const date = new Date();
  return (
    <Footer>
      <LinksDiv>
        <FirstDiv>
          <h3>Info</h3>
          <Link to={`/about`} style={{ textDecoration: "none" }}>
            <p>About Us</p>
          </Link>
          <Link to={`/investors`} style={{ textDecoration: "none" }}>
            <p>Investors</p>
          </Link>
          <Link to={`/partners`} style={{ textDecoration: "none" }}>
            <p>Partners</p>
          </Link>
          <Link to={`/careers`} style={{ textDecoration: "none" }}>
            <p>Careers</p>
          </Link>
          <Link to={`/resources`} style={{ textDecoration: "none" }}>
            <p>Resources</p>
          </Link>
        </FirstDiv>
        <SecondDiv>
          <h3>Social</h3>
          <a
            href="https://www.facebook.com/spnemaine/"
            target="_blank"
            rel="noopener noreferrer"
            alt="facebook"
          >
            <i className="fab fa-facebook" />
          </a>
          <a
            href="https://www.instagram.com/solarpowerne/"
            target="_blank"
            rel="noopener noreferrer"
            alt="instagram"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.pinterest.com/solarpowerne/"
            target="_blank"
            rel="noopener noreferrer"
            alt="pinterest"
          >
            <i className="fab fa-pinterest" />
          </a>
          <a
            href="https://www.yelp.com/biz/solar-power-new-england-gorham-2"
            target="_blank"
            rel="noopener noreferrer"
            alt="yelp"
          >
            <i className="fab fa-yelp" />
          </a>
          <a
            href="https://www.solarreviews.com/installers/solar_power_new_england-reviews/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Solar Reviews"
          >
            <i class="far fa-sun"></i>
          </a>
        </SecondDiv>
        <Statement>
          <p>
            Interested in solar for your home or helping your neighbors become
            more sustainable and energy independent? Contact us today for more
            information!
          </p>
          <a href="mailto:contact@solarpowerne.com">contact@solarpowerne.com</a>
          <HomeAdvisor
            href="https://www.homeadvisor.com/rated.SolarPowerNewEngland.97092349.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Solar Power New England is HomeAdvisor Screened & Approved"
              src="https://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=97092349&key=9b76e46ada6034f78ad60c35d2b86fe7"
            />
          </HomeAdvisor>
        </Statement>
      </LinksDiv>
      <Lazyload>
        <FlagDiv>
          <StateFlag draggable="false" src={oldFlag} alt="old flag of Maine" />
          <Logo
            draggable="false"
            src={logo}
            alt="Solar Power New England Logo"
          />
          <StateFlag
            draggable="false"
            src={newFlag}
            alt="current flag of Maine"
          />
        </FlagDiv>
      </Lazyload>
      <Copyright>
        <h5>Solar Power New England © {date.getFullYear()} </h5>
        <p>
          Made with{" "}
          <span role="img" aria-label="lobster">
            &#x1F99E;
          </span>{" "}
          from Maine
        </p>
      </Copyright>
    </Footer>
  );
};

export default footer;

const Footer = styled.footer`
  background-color: rgb(231, 225, 225);
  padding: 10px 0px 0px 0px;
  color: #132f0c;
  font-size: 18px;
`;

const LinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0px;
  padding: 10px 5%;
  justify-content: space-around;
  max-width: 1400px;
  @media (min-width: 550px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  @media (min-width: 700px) {
    margin: 0 auto;
    padding: 10px 10%;
  }
  h3 {
    font-size: 18px;
    color: #275e1a;
    font-weight: bold;
    margin: 0px;
  }
`;

const FirstDiv = styled.div`
  margin: 0px auto;
  display: inline;
  text-align: center;
  margin: 10px 10px 30px 10px;
  @media (min-width: 550px) {
    text-align: left;
    margin: 10px 20px;
    width: auto;
    margin-left: 0px;
  }
  p {
    font-size: 100%;
    color: #132f0c;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      /* color: rgba(29, 60, 68, 0.459); */
      opacity: 0.6;
    }
  }
`;

const SecondDiv = styled.div`
  margin: 0px auto;
  display: inline;
  text-align: center;
  margin: 10px 10px;
  @media (min-width: 550px) {
    text-align: left;
    margin: 10px 20px;
    width: auto;
  }
  a {
    display: block;
    margin: 12px auto;
    color: #132f0c;
    font-size: 30px;
    text-align: center;
    transition: 0.2s;
    &:hover {
      opacity: 0.6;
    }
    @media (min-width: 550px) {
      margin: 10px 0px;
      width: auto;
    }
  }
`;

const Statement = styled.div`
  text-align: center;
  margin: 10px 10px;

  @media (min-width: 550px) {
    width: 50%;
    text-align: left;
    margin: 10px 20px;
  }
  p {
    margin-top: 0px;
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

const FlagDiv = styled.div`
  padding: 30px 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1400px;

  @media (min-width: 700px) {
    margin: 0 auto;
    padding: 30px 10%;
  }
`;

const StateFlag = styled.img`
  width: 20%;
  height: 5%;
  @media (min-width: 550px) {
    width: 10%;
    height: 5%;
  }
`;

const Logo = styled.img`
  width: 30%;
  height: 5%;
`;

const Copyright = styled.div`
  margin: 0 10%;
  padding: 30px 5%;
  h5 {
    margin: 0;
  }
`;

const HomeAdvisor = styled.a`
  display: block;
  width: 50%;
  margin: 40px auto 20px;

  @media (min-width: 550px) {
    margin: 20px 0;
  }

  img {
    display: block;
    margin: 0 auto;
    height: 120px;
    @media (min-width: 550px) {
      margin: unset;
    }
  }
`;
