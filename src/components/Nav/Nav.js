import React from 'react'
import './Nav.css'
// import logo from '../../assets/logo.png'

function Nav() {
    return (
      <main className='Nav'>
        <nav className='navbar'>
            {/* <div>
                <img className='nav-logo' src={logo} alt='Solar Power New England' />
            </div> */}
            <div>
              <h1 className='brand'>SOLAR POWER NEW ENGLAND</h1>
            </div>
            <div className='nav-links'>
              <a href="mailto:contact@solarpowerne.com" className='button'>Contact Us</a>
            </div>
        </nav>
      </main>
    );
  }
  
export default Nav;