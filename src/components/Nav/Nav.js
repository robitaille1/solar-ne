import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Burger from "../UI/Burger/Burger";
import NavFlag from "../../assets/logo-notext.png";

class Nav extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  render() {
    let button = (
      <NavLink to={"/"} style={{ textDecoration: "none" }}>
        <button className="button">HOME</button>
      </NavLink>
    );

    if (this.props.path === "/") {
      button = (
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={2000}
        >
          <button className="button">CONTACT</button>
        </Link>
      );
    }
    return (
      <main className="Nav">
        <Navigation>
          <Brand>
            <NavLink to={`/`} style={{ textDecoration: "none" }}>
              <img src={NavFlag} alt="SPNE Flag Logo" />
            </NavLink>
            <NavLink to={`/`} style={{ textDecoration: "none" }}>
              <h1>
                SOLAR POWER <span>NEW ENGLAND</span>
              </h1>
            </NavLink>
          </Brand>
          <div style={{ display: "flex" }}>
            <NavLinks>
              {/* <NavLink to={`/about`} style={{ textDecoration: "none" }}>
                <p>ABOUT US</p>
              </NavLink> */}
              {button}
            </NavLinks>
            <Burger />
          </div>
        </Navigation>
      </main>
    );
  }
}

export default Nav;

const Navigation = styled.nav`
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  height: 80px;
  @media (min-width: 500px) and (max-width: 1000px) {
    text-align: center;
  }

  @media (min-width: 700px) {
    height: 70px;
  }

  @media (min-width: 1000px) {
    text-align: left;
    padding: 0px 10%;
    justify-content: space-between;
  }

  h1 {
    font-family: "Orbitron", sans-serif;
    color: rgb(62, 141, 161);
    margin: 7px 10px;

    @media (min-width: 700px) {
      padding: 10px;
      margin: 10px;
    }
  }
  button {
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
      }
    }
  }
  span {
    display: block;
    @media (min-width: 700px) {
      display: inline;
    }
  }
  p {
    color: rgb(62, 141, 161);
    background-color: rgb(255, 255, 255);
    height: 100%;
    display: flex;
    padding: 10px;
    align-items: center;
    margin: 0px;
    &:hover {
      color: rgb(62, 141, 161, 0.699);
    }
  }
`;

const Brand = styled.div`
  display: flex;

  &:hover {
    h1 {
      color: rgb(62, 141, 161, 0.699);
    }
    img {
      opacity: 0.699;
    }
  }

  img {
    height: 80%;
    margin: 7px auto;
    display: none;
    @media (min-width: 455px) {
      display: inline;
    }
  }
`;

const NavLinks = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
  }
`;
