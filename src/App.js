import React, { useContext } from "react";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyles } from "./global";
import { OpenContext } from "./context/OpenContext";
import {
  AboutPage,
  HomePage,
  CareersPage,
  InvestorsPage,
  PartnersPage,
  ResourcesPage,
  FinancingPage,
} from "./routes";

const App = () => {
  const [open] = useContext(OpenContext);

  return (
    <AppMain>
      <GlobalStyles open={open} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/investors" component={InvestorsPage} />
        <Route path="/partners" component={PartnersPage} />
        <Route path="/careers" component={CareersPage} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/financing" component={FinancingPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </AppMain>
  );
};

export default App;

const AppMain = styled.main`
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;
