import React from 'react';
import './App.css'
import Nav from './components/Nav/Nav'
import MainHeader from './components/MainHeader/MainHeader'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import ContactForm from './components/ContactForm/ContactForm'
import BlogSection from './components/BlogSection/BlogSection'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <main className='App'>
      <div>
        <Nav />
        <MainHeader />
        <WhatWeDo />
        <ContactForm />
        <BlogSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
