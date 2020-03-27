import React from "react";
import styled from "styled-components";

const img = props => <PageImg src={props.src} />;

export default img;

const PageImg = styled.img`
  width: 80%;
  @media (min-width: 700px) {
    width: 40%;
  }
`;
