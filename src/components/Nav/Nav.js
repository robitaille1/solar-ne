import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
      <main className='Nav'>
        <nav className='navbar'>
            <div className='brand-div'>
              <Link to={`/`} style={{ textDecoration: 'none' }}>
                <h1 className='brand'>SOLAR POWER <span className='new-england'>NEW ENGLAND</span></h1>
              </Link>
              
            </div>
            <div className='nav-links'>
            {/* <NewLink
              to='contact'
              spy={true}
              smooth={true}
              offset={-20}
              duration={1500}
              className='button'>
                Contact Us
              </NewLink> */}
              <Link to={`/about`} style={{ textDecoration: 'none' }}>
                About Us
              </Link>
            </div>
        </nav>
      </main>
    );
  }
  
export default Nav;