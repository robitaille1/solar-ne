import React, { useContext } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './global';
import { OpenContext } from './context/OpenContext';
import {
  AboutPage,
  HomePage,
  CareersPage,
  InvestorsPage,
  PartnersPage,
  ResourcesPage,
  FinancingPage,
  OurWorkPage,
  BlogPage,
  BlogsPage,
  PartnerPage,
  NotFound,
  ContactPage,
  TestimonialsPage,
} from './routes';
import ReactGA from 'react-ga';

const App = () => {
  const [open] = useContext(OpenContext);

  ReactGA.initialize('UA-181331175-1');
  return (
    <AppMain>
      <GlobalStyles open={open} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/investors" component={InvestorsPage} />
        <Route path="/careers" component={CareersPage} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/financing" component={FinancingPage} />
        <Route path="/our-work" component={OurWorkPage} />

        <Route path="/blogs/:blogSlug" component={BlogPage} />
        <Route
          path="/partners/:partnerSlug"
          component={PartnerPage}
        />
        <Route exact path="/partners" component={PartnersPage} />
        <Route exact path="/blogs" component={BlogsPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route
          exact
          path="/testimonials"
          component={TestimonialsPage}
        />
        <Route component={NotFound} />
      </Switch>
    </AppMain>
  );
};

export default App;

const AppMain = styled.main`
  width: 100%;
  box-sizing: border-box;
`;
