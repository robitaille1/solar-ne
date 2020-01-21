import React from 'react';
import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <main className='App'>
      <div className='container'>
        <div className='logo'>
          <img className='image' src={logo} alt='logo'/>
        </div>
        <p className='title'>Coming soon! <span className='thanks'>- Thank you for the patience.</span></p>
        <form action='mailto:contact@solarpowerne.com'>
            <button className='submit-btn' type='submit'>Contact us!</button>
        </form>
      </div>
    </main>
  );
}

export default App;
