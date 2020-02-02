import React from 'react'
import { Link } from 'react-scroll'
import './Jumbotron.css'

function Jumbotron() {
    return (
      <main className='Jumbotron'>
        <div className='jumbo-container'>
            <h2 className='jumbo-text'>
              Invest in your home, community, local businesses and Maine - this is your first step toward energy independence!
              {/* The future <span className='text-2'> is now..</span> */}
            </h2>
            {/* Photo by Scott Webb - @ScottWebb */}
            <div className='learn-more'>
              <p className='learn'>Learn more</p>
            <Link
              to='mainheader'
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              <i className="fas fa-chevron-circle-down down-arrow"></i>
              </Link>
            </div>
        </div>
      </main>
    );
  }
  
export default Jumbotron;