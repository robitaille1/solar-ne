import React, { createContext, useCallback, useReducer } from "react";
export const SolarContext = createContext();

const solarReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return {
        ...state,
        blogs: action.blogs,
      };
    case "SET_HOMEPAGE":
      return {
        ...state,
        homepage: action.homepage,
      };
    case "SET_IMAGES":
      return {
        ...state,
        images: action.images,
      };
    case "SET_ABOUT":
      return {
        ...state,
        aboutPage: action.aboutPage,
      };
    default:
      throw new Error("Nada");
  }
};

const SolarContextProvider = (props) => {
  const [state, dispatch] = useReducer(solarReducer, {
    blogs: null,
    homepage: {},
    images: null,
    aboutPage: {},
    investorsPage: {},
    careersPage: {},
    resourcesPage: {},
  });

  const {
    blogs,
    homepage,
    images,
    aboutPage,
    investorsPage,
    careersPage,
    resourcesPage,
  } = state;

  const fetchData = useCallback(() => {
    Promise.all([
      fetch("https://solarpowerne.herokuapp.com/homepage"),
      fetch("https://solarpowerne.herokuapp.com/blogs"),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        dispatch({ type: "SET_HOMEPAGE", homepage: data1 });
        dispatch({ type: "SET_BLOGS", blogs: data2 });
      });
  }, []);

  const fetchImages = useCallback(() => {
    fetch("https://solarpowerne.herokuapp.com/our-work-images")
      .then((response) => response.json())
      .then((resData) => {
        dispatch({ type: "SET_IMAGES", images: resData });
      });
  }, []);

  const fetchAboutPage = useCallback(() => {
    fetch("https://solarpowerne.herokuapp.com/about-page")
      .then((response) => response.json())
      .then((resData) => {
        dispatch({ type: "SET_ABOUT", aboutPage: resData });
      });
  }, []);

  const fetchInvestorsPage = useCallback(() => {
    fetch("https://solarpowerne.herokuapp.com/investors-page")
      .then((response) => response.json())
      .then((resData) => {
        dispatch({ type: "SET_INVESTORS", investorsPage: resData });
      });
  }, []);

  const fetchCareersPage = useCallback(() => {
    fetch("https://solarpowerne.herokuapp.com/careers-images")
      .then((response) => response.json())
      .then((resData) => {
        dispatch({ type: "SET_CAREERS", careersPage: resData });
      });
  }, []);

  const fetchResourcesPage = useCallback(() => {
    fetch("https://solarpowerne.herokuapp.com/resources-images")
      .then((response) => response.json())
      .then((resData) => {
        dispatch({ type: "SET_RESOURCES", resourcesPage: resData });
      });
  }, []);

  const providerValue = {
    fetchData,
    fetchImages,
    fetchAboutPage,
    fetchInvestorsPage,
    fetchCareersPage,
    fetchResourcesPage,
    blogs,
    homepage,
    images,
    aboutPage,
    investorsPage,
    careersPage,
    resourcesPage,
  };

  return (
    <SolarContext.Provider value={providerValue}>
      {props.children}
    </SolarContext.Provider>
  );
};

export default SolarContextProvider;
