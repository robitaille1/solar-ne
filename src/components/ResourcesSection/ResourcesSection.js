import React from "react";
import ReactMarkdown from "react-markdown";

const resourcesSection = (props) => (
  <div style={{ textAlign: "left", paddingBottom: "20px" }}>
    <h2>Incentives and Resources</h2>
    <ReactMarkdown source={props.content} />
  </div>
);

export default resourcesSection;
