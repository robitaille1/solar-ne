import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Burger from "../UI/Burger/Burger";
import NavFlag from "../../assets/logo-notext.png";
import Menu from "../UI/Menu/Menu";
import { useOnClickOutside } from "../utils/hooks";
import { OpenContext } from "../../context/OpenContext";

const Nav = (props) => {
  let button = (
    <NavLink to={"/"} style={{ textDecoration: "none" }}>
      <button>HOME</button>
    </NavLink>
  );

  if (props.path === "/") {
    button = (
      <Link to="contact" spy={true} smooth={true} offset={-70} duration={2000}>
        <button>CONTACT</button>
      </Link>
    );
  }

  const [open, setOpen] = useContext(OpenContext);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <main>
      <Navigation>
        <Brand>
          <img src={NavFlag} alt="SPNE Flag Logo" />

          <NavLink to={`/`} style={{ textDecoration: "none" }}>
            <h1>
              SOLAR POWER <span>NEW ENGLAND</span>
            </h1>
          </NavLink>
        </Brand>
        <RefDiv ref={node}>
          <NavLinks>{button}</NavLinks>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </RefDiv>
      </Navigation>
    </main>
  );
};

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
    justify-content: space-between;
  }

  @media (min-width: 1400px) {
    padding: 0 10%;
  }

  button {
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
    @media (min-width: 1000px) {
      /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5); */
      transition: 0.3s;
      background: #275e1a;
      padding: 12px;
      color: #fff;
      border: none;
      margin-left: 20px;
      border-radius: 2px;
      font-size: 14px;
      transition: 0.2s;
      &:hover {
        /* box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5); */
        opacity: 0.6;
      }
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

  h1 {
    font-family: "Orbitron", sans-serif;
    color: #275e1a;
    margin: 10px 10px;
    width: 100%;
    transition: 0.2s;

    @media (min-width: 700px) {
      padding: 10px;
      margin: 10px 10px 10px 0px;
    }

    &:hover {
      opacity: 0.6;
    }
  }

  span {
    display: block;
    @media (min-width: 700px) {
      display: inline;
    }
  }

  img {
    height: 80%;
    margin: 7px 5px;
    display: none;
    width: 108px;
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

const RefDiv = styled.div`
  display: flex;
`;
