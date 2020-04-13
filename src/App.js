import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalStyles } from "./global";
import SolarContext from "./context/SolarContext";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import BlogPage from "./routes/BlogPage";
import CareersPage from "./routes/CareersPage";
import InvestorsPage from "./routes/InvestorsPage";
import PartnersPage from "./routes/PartnersPage";
import ResourcesPage from "./routes/ResourcesPage";
import "./App.css";

class App extends Component {
  state = {
    blogs: this.context.blogs,
  };

  renderBlogRoutes() {
    return (
      <>
        {["/blogs/:blogId"].map((path) => (
          <Route exact key={path} path={path} component={BlogPage} />
        ))}
      </>
    );
  }
  static contextType = SolarContext;

  render() {
    const value = {
      blogs: this.state.blogs,
    };
    return (
      <SolarContext.Provider value={value}>
        <main className="App">
          <GlobalStyles />
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/investors" component={InvestorsPage} />
          <Route path="/partners" component={PartnersPage} />
          <Route path="/careers" component={CareersPage} />
          <Route path="/resources" component={ResourcesPage} />
          <Redirect to="/" />
          {this.renderBlogRoutes()}
        </main>
      </SolarContext.Provider>
    );
  }
}

export default App;
