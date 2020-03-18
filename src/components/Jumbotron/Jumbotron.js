import React from 'react';
import { Link } from 'react-scroll';
import './Jumbotron.css';

const jumbotron = () => (
  <main className='Jumbotron'>
    <div className='jumbo-container'>
        <h2 className='jumbo-text'>
          Invest in your home, community, and local businesses!
        </h2>
        {/* Photo by American Public Power Association - @publicpowerorg */}
        <div className='learn-more'>
          <p className='learn'>Learn more</p>
        <Link
          to='mainheader'
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
        >
          <i className="fas fa-chevron-circle-down down-arrow"></i>
          </Link>
        </div>
    </div>
  </main>
);
  
export default jumbotron;