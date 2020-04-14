import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utility/ScrollToTop";
import App from "./App";
import OpenContextProvider from "./context/OpenContext";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <OpenContextProvider>
        <App />
      </OpenContextProvider>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
