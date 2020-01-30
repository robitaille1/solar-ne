import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SolarContext from './context/SolarContext'
import HomePage from './routes/HomePage'
// import AboutPage from './routes/AboutPage'
import BlogPage from './routes/BlogPage'
import './App.css'


class App extends Component {
  state = {
    blogs: this.context.blogs
  }

  renderBlogRoutes() {
    return (
        <>
            {['/blogs/:blogId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={BlogPage}
                    />
                ))}
        </>
        );
    }
    static contextType = SolarContext

    render(){
      const value = {
        blogs: this.state.blogs
      }
      return (
       <SolarContext.Provider value={value}>
         <main className='App'>
            <Route exact path='/' component={HomePage} />
            {/* <Route path='/about' component={AboutPage} /> */}
            {this.renderBlogRoutes()}
         </main>
       </SolarContext.Provider> 
      )
    }
}

export default App;
