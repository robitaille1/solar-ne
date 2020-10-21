import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utility/ScrollToTop";
import App from "./App";
import OpenContextProvider from "./context/OpenContext";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <OpenContextProvider>
        <SimpleReactLightbox>
          <App />
        </SimpleReactLightbox>
      </OpenContextProvider>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
