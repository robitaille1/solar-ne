import React from 'react'
import { Link } from 'react-scroll'
import './Nav.css'

function Nav() {
    return (
      <main className='Nav'>
        <nav className='navbar'>
            <div className='brand-div'>
              <h1 className='brand'>SOLAR POWER <span className='new-england'>NEW ENGLAND</span></h1>
            </div>
            <div className='nav-links'>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-20}
              duration={1500}
              className='button'>
                Contact Us
              </Link>
            </div>
        </nav>
      </main>
    );
  }
  
export default Nav;