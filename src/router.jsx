import React from "react";
import { Switch, Route } from "react-router";

export default (
  <Switch>
    <Route path="/" />
    <Route path="/about" />
    <Route path="/investors" />
    <Route path="/careers" />
    <Route path="/resources" />
    <Route path="/financing" />
    <Route path="/our-work" />

    <Route path="/blogs/:blogSlug" />
    <Route path="/partners/:partnerSlug" />
    <Route path="/partners" />
    <Route path="/blogs" />
    <Route path="/contact" />
    <Route path="/testimonials" />
    <Route />
  </Switch>
);
