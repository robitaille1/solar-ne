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
          description: 'Energy consumption meters',
          description2: 'Lighting (LEDs) + smart home devices'
        },
        {
          id: 2,
          title: 'Home, business and municipal solar (+ Storage)',
          description: 'Solar batteries (iv) and battery storage',
          description2: ''
        },
        {
          id: 3,
          title: 'Electric vehicle supply equipment (EVSE)',
          description: 'Chargers and wall connectors',
          description2: ''
        },
        {
          id: 4,
          title: 'RFP, Request for proposal consulting',
          description: '',
          description2: ''
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
                    <WhatWeDoItem key={wwd.id} title={wwd.title} description={wwd.description} description2={wwd.description2} />
                    )}
                </section>
            </div>
      </main>
    );
  }
}
  
export default WhatWeDo;