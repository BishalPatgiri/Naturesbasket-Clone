import React, { useState } from "react";

export const BoxContext = React.createContext();

export default function BoxContextProvider({ children }) {
  const [box, setBox] = useState(false);

  const Toggle = () => {
    setBox(box === false ? box === true : box === false);
  };

  return (
    <BoxContext.Provider value={{ box, Toggle }}>
      {children}
    </BoxContext.Provider>
  );
}
