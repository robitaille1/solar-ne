import React from "react";
import styled from "styled-components";
import PartnersCard from "./PartnersCard";

const partnersSection = (props) => {
  let partners = [];
  for (let key in props.partners) {
    partners.unshift(props.partners[key]);
  }
  return (
    <>
      <h2>Our partners include...</h2>
      <Partners>
        {partners.map((p) => (
          <PartnersCard key={p.id} partner={p} />
        ))}
      </Partners>
    </>
  );
};

export default partnersSection;

const Partners = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: white;
  padding: 20px;
  border-radius: 5px;

  grid-row-gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  img {
    padding: 20px;
    margin: auto;
    width: 100%;
  }
`;
