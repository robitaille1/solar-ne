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
          description: 'Smart Home Devices, Energy Consumption Meters & LED Lighting',
          img: 'https://images.unsplash.com/photo-1458007683879-47560d7e33c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=727&q=80',
          credit: 'Thomas Kelley @thkelley'
        },
        {
          id: 2,
          title: 'Home, Business, and Municipal Solar (+Storage)',
          description: 'Roof or Ground Mounted Solar Photovoltaics, Solar-Plus-Storage Solutions, Installation & System Maintentance',
          img: 'https://i.imgur.com/3qDr7d5.jpg',
          credit: ''
        },
        {
          id: 3,
          title: 'Electric Vehicle Supply Equipment (EVSE)',
          description: 'Residential and Commercial EV Charging devices ',
          img: 'https://images.unsplash.com/photo-1567509359570-60f36c83c577?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          credit: 'Markus Spiske @markusspiske'
        },
        {
          id: 4,
          title: 'RFP, Request For Proposal Consultation',
          description: '',
          img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          credit: 'Helloquence'
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
                    <WhatWeDoItem key={wwd.id} item={wwd} />
                    )}
                </section>
            </div>
      </main>
    );
  }
}
  
export default WhatWeDo;