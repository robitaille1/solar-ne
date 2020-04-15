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
    <h2>Our partners include...</h2>
    <Partners>
      <img alt="Canadian Solar" src={Canadian} />
      <img alt="Enphase" src={Enphase} />
      <img alt="Fronius" src={Fronius} />
      <img alt="Ironridge" src={Ironridge} />
      <img alt="Jinko" src={Jinko} />
      <img alt="LG Electronics" src={Lg} />
      <img alt="Longi" src={Longi} style={{ width: "100%" }} />
      <img alt="Mission Solar Energy" src={Mission} style={{ width: "100%" }} />
      <img alt="Panasonic" src={Panasonic} style={{ width: "100%" }} />
      <img alt="QCells" src={QCells} />
      <img alt="REC Group" src={Rec} />
      <img alt="S-5" src={S5} />
      <img alt="Schneider Electric" src={Schneider} />
      <img alt="Silfab Solar" src={Silfab} />
      <img alt="SMA" src={Sma} />
      <img alt="SnanpNRack" src={Snanp} />
      <img alt="Solar Edge" src={Solaredge} />
      <img alt="Solaria" src={Solaria} />
      <img alt="Sun Power" src={Sunpower} />
      <img alt="Trina Solar" src={Trina} />
      <img alt="Vikram Solar" src={Vikram} />
      <img alt="Yaskawa Solectria" src={Yaskawa} />
    </Partners>
  </>
);

export default partnersSection;

const Partners = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: white;
  padding: 20px;
  border-radius: 5px;

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
    width: 100%;
  }
`;
