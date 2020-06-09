import React from "react";
import styled from "styled-components";

const img = props => (
  <ImgDiv>
    <PageImg draggable="false" src={props.src} />
  </ImgDiv>
);

export default img;

const ImgDiv = styled.div`
  text-align: center;
`;
const PageImg = styled.img`
  width: 80%;
  margin: 0px auto;
  @media (min-width: 700px) {
    width: 40%;
  }
`;
