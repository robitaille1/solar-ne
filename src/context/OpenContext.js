import React, { useState, createContext } from "react";

export const OpenContext = createContext();

const OpenContextProvider = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <OpenContext.Provider value={[open, setOpen]}>
      {props.children}
    </OpenContext.Provider>
  );
};

export default OpenContextProvider;
