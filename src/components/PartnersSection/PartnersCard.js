import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const partnersCard = (props) => (
  <Card>
    <img
      draggable="false"
      alt={props.partner.PartnerImage[0].alternativeText}
      src={props.partner.PartnerImage[0].formats.thumbnail.url}
      samesite="None"
      secure="true"
    />
    <p style={{ marginBottom: "0", fontWeight: "bold" }}>
      {props.partner.PartnerName}
    </p>
    <p>{props.partner.ShortDescription}</p>
    <Link to={`/partners/lg-solar`}>Learn More</Link>
  </Card>
);

export default partnersCard;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  img {
    margin: auto;
    width: 100%;
    padding: 0 !important;
  }
`;
