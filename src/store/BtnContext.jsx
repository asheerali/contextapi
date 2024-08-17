import React, { createContext, useState } from "react";

export const Context = createContext();

function BtnContextProvider({ children }) {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      {children}
    </Context.Provider>
  );
}

export default BtnContextProvider;
