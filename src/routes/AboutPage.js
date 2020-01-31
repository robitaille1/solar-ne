import React from 'react'
import Nav from '../components/Nav/Nav'
import AboutSection from '../components/AboutSection/AboutSection'
import Footer from '../components/Footer/Footer'




export default class AboutPage extends React.Component {
  render() {
    return (
      <main className='AboutPage'>
        <Nav />
        <div>
          <AboutSection />
        </div>
        <Footer />
      </main>
    )
  }
}
