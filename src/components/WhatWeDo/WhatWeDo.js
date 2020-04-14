import React, { Component } from "react";
import styled from "styled-components";
import WhatWeDoItem from "../WhatWeDoItem/WhatWeDoItem";
import battery from "../../assets/icons/battery.png";
import home from "../../assets/icons/solarenergy.png";
import charger from "../../assets/icons/electric.png";
import gear from "../../assets/icons/energygear.png";

class WhatWeDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wwd: [
        {
          id: 1,
          title: "Home, Business, and Municipal Solar (+Storage)",
          description:
            "Roof or Ground Mounted Solar Photovoltaics, Solar-Plus-Storage Solutions, Installation & System Maintentance",
          img: home,
        },
        {
          id: 2,
          title: "Energy Management & Analysis",
          description:
            "Smart Home Devices, Energy Consumption Meters & LED Lighting",
          img: battery,
        },
        {
          id: 3,
          title: "Electric Vehicle Supply Equipment (EVSE)",
          description: "Residential and Commercial EV Charging devices ",
          img: charger,
        },
        {
          id: 4,
          title: "Request For Proposal Consultation",
          description: "",
          img: gear,
        },
      ],
    };
  }

  render() {
    return (
      <Wrapper>
        <div style={{ margin: "0 10%" }}>
          <h2>What We Do</h2>
          <section>
            {this.state.wwd.map((wwd) => (
              <WhatWeDoItem key={wwd.id} item={wwd} />
            ))}
          </section>
          {/* Icons made by Freepik on Flaticon.com  */}
        </div>
      </Wrapper>
    );
  }
}

export default WhatWeDo;

const Wrapper = styled.section`
  padding-top: 60px;
  padding-bottom: 20px;
  background-color: white;
  section {
    display: flex;
    flex-direction: column;
  }
  h2 {
    margin: 0;
    text-align: center;
    font-size: 35px;
    @media (min-width: 600px) {
      font-size: 50px;
    }
  }
`;
