import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import oldFlag from '../../assets/oldflag.gif';
import newFlag from '../../assets/newflag.png';
import logo from '../../assets/logo.png';

const footer = () => {
  const date = new Date();
  return (
    <main className='Footer'>
        <nav className='footer'>
            <div className='links-div'>
                <div className='links first'>
                  <p className='link-header'>Info</p>
                  <Link 
                    to={`/about`}
                    className='page-link about-footer'
                  >
                      <p>About Us</p>
                  </Link>
                  <Link 
                    to={`/investors`}
                    className='page-link'
                  >
                      <p>Investors</p>
                  </Link>
                  <Link 
                    to={`/partners`}
                    className='page-link'
                  >
                      <p>Partners</p>
                  </Link>
                  <Link 
                    to={`/careers`}
                    className='page-link'
                  >
                      <p>Careers</p>
                  </Link>
                  <Link 
                    to={`/resources`}
                    className='page-link'
                  >
                      <p>Resources</p>
                  </Link>
                </div>
                <div className='links'>
                  <p className='link-header'>Social</p>
                  <a 
                      href='https://www.facebook.com/mainesolarcompany/'
                      target="_blank"
                      rel="noopener noreferrer"
                      className='social'
                      alt='facebook'>
                      <i 
                        className="fab fa-facebook" 
                      />
                    </a>
                    <a 
                      href='https://www.instagram.com/solarpowerne/'
                      target="_blank"
                      rel="noopener noreferrer"
                      className='social'
                      alt='instagram'>
                      <i 
                        className="fab fa-instagram" 
                      />
                    </a>
                    <a 
                      href='https://www.pinterest.com/solarpowerne/'
                      target="_blank"
                      rel="noopener noreferrer"
                      className='social'
                      alt='pinterest'>
                      <i 
                        className="fab fa-pinterest" 
                      />
                    </a>
                    <a 
                      href='https://www.yelp.com/biz/solar-power-new-england-gorham-2'
                      target="_blank"
                      rel="noopener noreferrer"
                      className='social'
                      alt='yelp'>
                      <i 
                        className="fab fa-yelp" 
                      />
                    </a>
                </div>
                <div className='footer-statement'>
                  <p>
                    Interested in solar for your home or helping your neighbors become more sustainable and energy independent? Contact us today for more information!
                  </p>
                  <a 
                    href="mailto:contact@solarpowerne.com" className='contact-link'>
                      contact@solarpowerne.com
                  </a>
                </div>
              </div>
            <div className='flag-div'>
              <img className='flags' src={oldFlag} alt='old flag of Maine'/>
              <img className='logo-flag' src={logo} alt='Solar Power New England Logo'/>
              <img className='flags' src={newFlag} alt='current flag of Maine'/>
            </div>
            <div className='container copyright'>
                <h5>Solar Power New England © {date.getFullYear()} </h5>
                <p>Made with <span role='img' aria-label="lobster">🦞</span> from Maine</p>
            </div>
        </nav>
      </main>
  );
};
  
export default footer;