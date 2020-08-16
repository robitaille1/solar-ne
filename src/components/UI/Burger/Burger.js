import React from "react";
import styled from "styled-components";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;

const StyledBurger = styled.a`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin: auto 10px;

  @media (min-width: 1000px) {
    margin: auto 20px;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    div {
      opacity: 0.6;
      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : ".6")};
      }
    }
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #275e1a;
    border-radius: 10px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
