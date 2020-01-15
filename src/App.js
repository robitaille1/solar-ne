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
        <p className='title'>Coming soon!</p>
        <p>Thank you for the patience</p>
      </div>
    </main>
  );
}

export default App;
