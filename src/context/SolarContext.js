import React, { createContext, useCallback, useReducer } from "react";
export const SolarContext = createContext();

const solarReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return {
        ...state,
        blogs: action.blogs,
      };
    default:
      throw new Error("Nada");
  }
};

const SolarContextProvider = (props) => {
  const [state, dispatch] = useReducer(solarReducer, {
    blogs: null,
  });

  const { blogs } = state;

  const fetchData = useCallback(() => {
    fetch("https://solarpowerne.herokuapp.com/blogs")
      .then((response) => response.json())
      .then((resData) => {
        dispatch({ type: "SET_BLOGS", blogs: resData });
      });
  }, []);

  const providerValue = {
    fetchData,
    blogs,
  };

  return (
    <SolarContext.Provider value={providerValue}>
      {props.children}
    </SolarContext.Provider>
  );
};

export default SolarContextProvider;
