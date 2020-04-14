import React from "react";
import styled from "styled-components";
import {
  Canadian,
  Enphase,
  Fronius,
  Ironridge,
  Jinko,
  Lg,
  Longi,
  Mission,
  Panasonic,
  QCells,
  Rec,
  S5,
  Schneider,
  Silfab,
  Sma,
  Snanp,
  Solaredge,
  Solaria,
  Trina,
  Vikram,
  Yaskawa,
  Sunpower,
} from "../../assets/partners";

const partnersSection = () => (
  <>
    <h2>Our partners include</h2>
    <Partners>
      <img src={Canadian} />
      <img src={Enphase} />
      <img src={Fronius} />
      <img src={Ironridge} />
      <img src={Jinko} />
      <img src={Lg} />
      <img src={Longi} style={{ width: "100%" }} />
      <img src={Mission} style={{ width: "100%" }} />
      <img src={Panasonic} style={{ width: "100%" }} />
      <img src={QCells} />
      <img src={Rec} />
      <img src={S5} />
      <img src={Schneider} />
      <img src={Silfab} />
      <img src={Sma} />
      <img src={Snanp} />
      <img src={Solaredge} />
      <img src={Solaria} />
      <img src={Sunpower} />
      <img src={Trina} />
      <img src={Vikram} />
      <img src={Yaskawa} />
    </Partners>
  </>
);

export default partnersSection;

const Partners = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: white;
  padding: 20px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  img {
    padding: 20px;
    margin: auto;
    @media (min-width: 1000px) {
      padding: 10px;
    }
  }
`;
