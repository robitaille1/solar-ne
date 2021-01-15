import React from "react";
import Img from "../utils/Img";
import ReactMarkdown from "react-markdown";

const investorsSection = (props) => (
  <>
    <h2>Investors</h2>
    <ReactMarkdown source={props.content} />
    <Img src="https://res.cloudinary.com/robitaille/image/upload/v1603768005/photo-1454165804606-c3d57bc86b40_qfvjv0.webp" />
  </>
);

export default investorsSection;
