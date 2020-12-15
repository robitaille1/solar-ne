import React from "react";
import LazyLoad from "react-lazyload";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/Footer/Footer";

const pageLayout = (props) => (
  <Wrapper>
    <Nav />
    <Content>
      <ContentContainer>
        {props.children}
        {/* <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Homebtn>HOME</Homebtn>
          </Link>
        </div> */}
      </ContentContainer>
    </Content>
    <LazyLoad>
      <BlogSection />
    </LazyLoad>
    <LazyLoad>
      <Footer />
    </LazyLoad>
  </Wrapper>
);

export default pageLayout;

const Wrapper = styled.main`
  background-color: #fcfbfb;
`;

const Content = styled.section`
  white-space: pre-line;
  padding: 50px 0% 0px;
  margin: 50px 5%;
  color: #132f0c;
  font-size: 18px;
  text-align: center;
  max-width: 1400px;
  @media (min-width: 700px) {
    margin: 0 auto;
    padding: 100px 10% 20px;
  }
  a {
    margin: 12px auto;
    color: #132f0c;
    transition: 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }
  p {
    text-align: left;
    line-height: 1.7;
    padding: 0 20px;
  }
`;

const ContentContainer = styled.div`
  background: white;
  margin-bottom: 15px;
  border: 1px solid #ece7e7;
  border-radius: 5px;

  h2 {
    background: #5a9734;
    border-radius: 5px 5px 0 0;
    color: white;
    padding: 20px;
    font-size: 25px;
    margin-top: 0;

    @media (min-width: 700px) {
      font-size: 35px;
    }
  }
  h3 {
    padding: 0 20px;
  }
`;

// const Homebtn = styled.button`
//   &:hover {
//     cursor: pointer;
//   }
//   font-size: 13px;
//   background: #275e1a;
//   padding: 13px 20px;
//   color: #fff;
//   border: none;
//   transition: 0.2s;
//   border-radius: 2px;
//   &:hover {
//     opacity: 0.6;
//   }

//   @media (min-width: 1000px) {
//     display: none;
//   }
// `;
