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
  Sunpower
} from "../../assets/partners";

const partnersSection = () => (
  <>
    <h2>Our partners include...</h2>
    <Partners>
      <img draggable="false" alt="Canadian Solar" src={Canadian} />
      <img draggable="false" alt="Enphase" src={Enphase} />
      <img draggable="false" alt="Fronius" src={Fronius} />
      <img draggable="false" alt="Ironridge" src={Ironridge} />
      <img draggable="false" alt="Jinko" src={Jinko} />
      <img draggable="false" alt="LG Electronics" src={Lg} />
      <img
        draggable="false"
        alt="Longi"
        src={Longi}
        style={{ width: "100%" }}
      />
      <img
        draggable="false"
        alt="Mission Solar Energy"
        src={Mission}
        style={{ width: "100%" }}
      />
      <img
        draggable="false"
        alt="Panasonic"
        src={Panasonic}
        style={{ width: "100%" }}
      />
      <img draggable="false" alt="QCells" src={QCells} />
      <img draggable="false" alt="REC Group" src={Rec} />
      <img draggable="false" alt="S-5" src={S5} />
      <img draggable="false" alt="Schneider Electric" src={Schneider} />
      <img draggable="false" alt="Silfab Solar" src={Silfab} />
      <img draggable="false" alt="SMA" src={Sma} />
      <img draggable="false" alt="SnanpNRack" src={Snanp} />
      <img draggable="false" alt="Solar Edge" src={Solaredge} />
      <img draggable="false" alt="Solaria" src={Solaria} />
      <img draggable="false" alt="Sun Power" src={Sunpower} />
      <img draggable="false" alt="Trina Solar" src={Trina} />
      <img draggable="false" alt="Vikram Solar" src={Vikram} />
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
