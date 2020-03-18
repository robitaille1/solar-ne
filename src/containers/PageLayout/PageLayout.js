import React from 'react';
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import './PageLayout.css'

const pageLayout = (props) => (
    <main className='PageLayout'>
        <Nav />
            <div className='PageContent'>
                {props.children}
            </div>
        <Footer />
    </main>
);

export default pageLayout