import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Nav.css';

class Nav extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  render() {
    let button = 
      <NavLink to={'/'} style={{ textDecoration: 'none' }}>
        <button className='button'>
          HOME
        </button>
      </NavLink>


      if (this.props.path === '/') {
        button = 
        <Link to='contact' spy={true} smooth={true} offset={-10} duration={2000}>
        <button className='button'>
          CONTACT
        </button>
      </Link>
      }
      return (
        <main className='Nav'>
          <nav className='navbar'>
              <div className='brand-div'>
                <NavLink to={`/`} style={{ textDecoration: 'none' }}>
                  <h1 className='brand'>SOLAR POWER <span className='new-england'>NEW ENGLAND</span></h1>
                </NavLink>
                
              </div>
              <div className='nav-links'>
                <NavLink className='nav-link' to={`/about`} style={{ textDecoration: 'none' }}>
                  ABOUT US
                </NavLink>
                {button}
              </div>
          </nav>
        </main>
      );
    } 
}
  
export default Nav;