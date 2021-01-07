import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../assets/logo.png";
import ReactGA from "react-ga";

const Menu = ({ open, setOpen }) => {
  const clicked = (link) => {
    setOpen(!open);

    ReactGA.event({
      category: "MENU-LINK",
      action: `${link} menu link clicked`,
      label: "MENU",
    });
  };

  return (
    <StyledMenu open={open}>
      <img src={Logo} alt="SPNE logo " />
      <Link to="/about" onClick={() => clicked("About")}>
        <p>ABOUT US</p>
        <p>></p>
      </Link>
      <Link to="/our-work" onClick={() => clicked("Our Work")}>
        <p>OUR WORK</p>
        <p>></p>
      </Link>
      <Link to="/investors" onClick={() => clicked("Investors")}>
        <p>INVESTORS</p>
        <p>></p>
      </Link>
      <Link to="/partners" onClick={() => clicked("Partners")}>
        <p>PARTNERS</p>
        <p>></p>
      </Link>
      <Link to="/careers" onClick={() => clicked("Careers")}>
        <p>CAREERS</p>
        <p>></p>
      </Link>
      <Link to="/resources" onClick={() => clicked("Resources")}>
        <p>RESOURCES</p>
        <p>></p>
      </Link>
      <Link to="/blogs" onClick={() => clicked("Blogs")}>
        <p>BLOGS</p>
        <p>></p>
      </Link>
    </StyledMenu>
  );
};
export default Menu;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  -webkit-box-shadow: ${({ open }) =>
    open ? "-8px -7px 16px -11px rgba(184, 184, 184, 1)" : "none"};
  -moz-box-shadow: ${({ open }) =>
    open ? "-8px -7px 16px -11px rgba(184, 184, 184, 1)" : "none"};
  box-shadow: ${({ open }) =>
    open ? "-8px -7px 16px -11px rgba(184, 184, 184, 1)" : "none"};

  @media (max-width: 600px) {
    width: 100%;
    padding: 2rem 2rem 100px;
    text-align: left;
  }

  @media (max-width: 375px) {
    padding: 2rem 1rem 100px;
  }

  @media (min-width: 1200px) {
    width: 33.33%;
  }

  img {
    width: 70%;
    margin: 10px auto;
    display: none;
    @media (min-width: 600px) {
      display: unset;
      width: 50%;
      margin: 0 auto;
    }
  }

  a {
    font-size: 1rem;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #275e1a;
    text-decoration: none;
    transition: color 0.3s linear;
    /* border-radius: 5px; */
    padding: 5px;
    margin: 10px;
    transition: 0.2s;

    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e1e0e0;
    @media (max-width: 685px) {
      font-size: 1rem;
      text-align: center;
    }

    @media (max-width: 440px) {
      font-size: 1rem;
    }

    &:hover {
      transition: 0.3s;
      border-bottom: 2px solid #3b8f28;
      p {
        transition: 0.3s;
        color: #3b8f28;
      }
    }

    p {
      color: #868585;
    }
  }
`;
