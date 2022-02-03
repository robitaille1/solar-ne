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
    case "SET_INVESTORS":
      return {
        ...state,
        investorsPage: action.investorsPage,
      };
    case "SET_CAREERS":
      return {
        ...state,
        careersPage: action.careersPage,
      };
    case "SET_BLOGSPAGE":
      return {
        ...state,
        blogsPage: action.blogsPage,
      };
    case "SET_RESOURCES":
      return {
        ...state,
        resourcesPage: action.resourcesPage,
      };
    case "SET_PARTNERS":
      return {
        ...state,
        partners: action.partners,
      };
    case "SET_HERO":
      return {
        ...state,
        hero: action.hero,
      };
    case "SET_TESTIMONIALS":
      return {
        ...state,
        testimonials: action.testimonials,
      };
    case "SET_TESTIMONIALSSECTION":
      return {
        ...state,
        testimonialsSection: action.testimonialsSection,
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
    partners: {},
    hero: null,
    blogsPage: {},
    testimonialsSection: {},
    testimonials: {},
  });

  const {
    blogs,
    homepage,
    images,
    aboutPage,
    investorsPage,
    careersPage,
    resourcesPage,
    partners,
    hero,
    blogsPage,
    testimonialsSection,
    testimonials,
  } = state;

  const fetchData = useCallback(() => {
    Promise.all([
      fetch("https://solarpowerne.herokuapp.com/homepage"),
      fetch("https://solarpowerne.herokuapp.com/blogs"),
      fetch("https://solarpowerne.herokuapp.com/testimonials-section"),
    ])
      .then(([res1, res2, res4]) =>
        Promise.all([res1.json(), res2.json(), res4.json()])
      )
      .then(([data1, data2, data4]) => {
        dispatch({ type: "SET_HOMEPAGE", homepage: data1 });
        dispatch({ type: "SET_BLOGS", blogs: data2 });
        // dispatch({ type: "SET_HERO", hero: data3 });
        dispatch({
          type: "SET_TESTIMONIALSSECTION",
          testimonialsSection: data4,
        });
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
    fetch("https://solarpowerne.herokuapp.com/careers-page")
      .then((response) => response.json())
      .then((resData) => {
        dispatch({ type: "SET_CAREERS", careersPage: resData });
      });
  }, []);

  const fetchResourcesPage = useCallback(() => {
    fetch("https://solarpowerne.herokuapp.com/resources-page")
      .then((response) => response.json())
      .then((resData) => {
        dispatch({ type: "SET_RESOURCES", resourcesPage: resData });
      });
  }, []);

  const fetchPartners = useCallback(() => {
    fetch("https://solarpowerne.herokuapp.com/partners")
      .then((response) => response.json())
      .then((resData) => {
        dispatch({ type: "SET_PARTNERS", partners: resData });
      });
  }, []);

  const fetchBlogsPage = useCallback(() => {
    fetch("https://solarpowerne.herokuapp.com/blogs-page")
      .then((response) => response.json())
      .then((resData) => {
        dispatch({ type: "SET_BLOGSPAGE", blogsPage: resData });
      });
  }, []);

  const fetchTestimonials = useCallback(() => {
    fetch("https://solarpowerne.herokuapp.com/testimonials")
      .then((response) => response.json())
      .then((resData) => {
        dispatch({ type: "SET_TESTIMONIALS", testimonials: resData });
      });
  }, []);

  const providerValue = {
    fetchData,
    fetchImages,
    fetchAboutPage,
    fetchInvestorsPage,
    fetchCareersPage,
    fetchResourcesPage,
    fetchPartners,
    fetchBlogsPage,
    blogs,
    homepage,
    images,
    aboutPage,
    investorsPage,
    careersPage,
    resourcesPage,
    partners,
    hero,
    blogsPage,
    fetchTestimonials,
    testimonials,
    testimonialsSection,
  };

  return (
    <SolarContext.Provider value={providerValue}>
      {props.children}
    </SolarContext.Provider>
  );
};

export default SolarContextProvider;
