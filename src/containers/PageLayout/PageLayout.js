import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/Footer/Footer";

const pageLayout = (props) => (
  <Wrapper>
    <Nav />
    <Content>
      {props.children}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Homebtn>HOME</Homebtn>
        </Link>
      </div>
    </Content>
    <BlogSection />
    <Footer />
  </Wrapper>
);

export default pageLayout;

const Wrapper = styled.main`
  background-color: rgb(231, 225, 225);
`;

const Content = styled.section`
  white-space: pre-line;
  padding: 50px 7% 0px;
  margin: 50px 5%;
  color: rgb(29, 60, 68);
  font-size: 18px;
  text-align: left;
  @media (min-width: 700px) {
    .PageContent {
      margin: 60px 10%;
    }
  }
  a {
    margin: 12px auto;
    color: rgb(29, 60, 68);
    &:hover {
      color: rgba(29, 60, 68, 0.459);
    }
`;

const Homebtn = styled.button`
  &:hover {
    cursor: pointer;
  }

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

  @media (min-width: 1000px) {
    display: none;
  }
`;
