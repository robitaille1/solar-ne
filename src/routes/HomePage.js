import React from "react";
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
    <WhatWeDo />
    <ContactForm />
    <BlogSection />
    <Footer />
  </main>
);

export default homePage;
