import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyles } from "./global";
import SolarContext from "./context/SolarContext";
import {
  AboutPage,
  HomePage,
  BlogPage,
  CareersPage,
  InvestorsPage,
  PartnersPage,
  ResourcesPage,
} from "./routes";
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
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/investors" component={InvestorsPage} />
            <Route path="/partners" component={PartnersPage} />
            <Route path="/careers" component={CareersPage} />
            <Route path="/resources" component={ResourcesPage} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
          {this.renderBlogRoutes()}
        </main>
      </SolarContext.Provider>
    );
  }
}

export default App;
