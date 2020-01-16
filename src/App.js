import React from 'react';
import logo from './spne.png'
import './App.css'

function App() {
  return (
    <main className='App'>
      <div className='container'>
        <div className='logo'>
          <img className='image' src={logo} alt='logo'/>
        </div>
        <p className='title'>Coming soon! <span className='thanks'>- Thank you for the patience.</span></p>
        <a href='mailto:contact@solarpowerne.com'>Contact Us</a>
      </div>
    </main>
  );
}

export default App;
