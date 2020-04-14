import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../assets/logo.png";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <img src={Logo} alt="SPNE logo " />
      <Link to="/about" onClick={() => setOpen(!open)}>
        About us
      </Link>
      <Link to="/investors" onClick={() => setOpen(!open)}>
        Investors
      </Link>
      <Link to="/partners" onClick={() => setOpen(!open)}>
        Partners
      </Link>
      <Link to="/careers" onClick={() => setOpen(!open)}>
        Careers
      </Link>
      <Link to="/resources" onClick={() => setOpen(!open)}>
        Resources
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
  text-align: left;
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
  }

  img {
    width: 70%;
    margin: 10px auto;
    @media (min-width: 600px) {
      width: 30%;
      margin: 0px;
    }
  }

  a {
    font-size: 2rem;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 600px) {
      font-size: 1.5rem;
      text-align: center;
    }

    @media (max-width: 360px) {
      font-size: 1rem;
    }

    &:hover {
      color: darkgray;
    }
  }
`;
