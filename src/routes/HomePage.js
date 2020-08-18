import React from "react";
import LazyLoad from "react-lazyload";
import Nav from "../components/Nav/Nav";
// import Banner from "../components/Banner/Banner";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import MainHeader from "../components/MainHeader/MainHeader";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import ContactForm from "../components/ContactForm/ContactForm";
import BlogSection from "../components/BlogSection/BlogSection";
import Footer from "../components/Footer/Footer";

const homePage = (props) => (
  <main>
    <Nav path={props.match.path} />
    {/* <Banner /> */}
    <Jumbotron />
    <MainHeader />
    <LazyLoad>
      <WhatWeDo />
    </LazyLoad>
    <ContactForm />
    <LazyLoad>
      <BlogSection />
    </LazyLoad>
    <LazyLoad>
      <Footer />
    </LazyLoad>
  </main>
);

export default homePage;
