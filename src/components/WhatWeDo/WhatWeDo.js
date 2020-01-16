import React, { Component } from 'react'
import './WhatWeDo.css'
import WhatWeDoItem from '../WhatWeDoItem/WhatWeDoItem'

class WhatWeDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wwd: [
        {
          id: 1,
          title: 'Energy Management & Analysis',
          description: 'Smart Home Devices, Energy Consumption Meters & LED Lighting'
        },
        {
          id: 2,
          title: 'Home, Business, and Municipal Solar (+Storage)',
          description: 'Roof or Ground Mounted Solar Photovoltaics, Solar-Plus-Storage Solutions, Installation & System Maintentance'
        },
        {
          id: 3,
          title: 'Electric Vehicle Supply Equipment (EVSE)',
          description: 'Residential and Commercial EV Charging devices '
        },
        {
          id: 4,
          title: 'RFP, Request For Proposal Consultation',
          description: '',
        }
      ]
    };
  }

  render(){
    return (
      <main className='WhatWeDo'>
            <div className='container'>
                <h2 className='main-header'>What We Do</h2>
                <section className='section-display' role='main'>
                   {this.state.wwd.map(wwd => 
                    <WhatWeDoItem key={wwd.id} title={wwd.title} description={wwd.description} />
                    )}
                </section>
            </div>
      </main>
    );
  }
}
  
export default WhatWeDo;