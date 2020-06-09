import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../assets/logo.png";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <img src={Logo} alt="SPNE logo " />
      <Link to="/about" onClick={() => setOpen(!open)}>
        ABOUT US
      </Link>
      <Link to="/investors" onClick={() => setOpen(!open)}>
        INVESTORS
      </Link>
      <Link to="/partners" onClick={() => setOpen(!open)}>
        PARTNERS
      </Link>
      <Link to="/careers" onClick={() => setOpen(!open)}>
        CAREERS
      </Link>
      <Link to="/resources" onClick={() => setOpen(!open)}>
        RESOURCES
      </Link>
    </StyledMenu>
  );
};
export default Menu;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(62, 141, 161);
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (max-width: 600px) {
    width: 70%;
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
    @media (min-width: 600px) {
      width: 50%;
      margin: 0 auto;
    }
  }

  a {
    font-size: 2rem;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #3e8da1;
    text-decoration: none;
    transition: color 0.3s linear;
    border-radius: 5px;
    padding: 5px;
    background: #e8e8e8;
    margin: 10px;

    @media (max-width: 685px) {
      font-size: 1.5rem;
      text-align: center;
    }

    @media (max-width: 440px) {
      font-size: 1rem;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`;
