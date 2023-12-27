import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utility/ScrollToTop';
import App from './App';
import OpenContextProvider from './context/OpenContext';
// import SimpleReactLightbox from "simple-react-lightbox";
// import SolarContextProvider from './context/SolarContext';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <ScrollToTop>
        <OpenContextProvider>
          {/* <SolarContextProvider> */}
          {/* <SimpleReactLightbox> */}
          <App />
          {/* </SimpleReactLightbox> */}
          {/* </SolarContextProvider> */}
        </OpenContextProvider>
      </ScrollToTop>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
