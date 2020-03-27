import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/Footer/Footer";

const pageLayout = props => (
  <Wrapper>
    <Nav />
    <Content>{props.children}</Content>
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
  padding: 50px 7%;
  margin: 50px 5%;
  color: rgb(29, 60, 68);
  font-size: 18px;
  text-align: left;
  @media (min-width: 700px) {
    .PageContent {
      margin: 60px 10%;
    }
  }
`;
