import { createContext, useState } from "react";

export const Context = createContext({
  signedIn: false,
  toggleSignedIn: () => {},
});

function BtnContextProvider({ children }) {
  const [signedIn, setSignedIn] = useState(false);
  const toggleSignedIn = () => setSignedIn(!signedIn);

  return (
    <Context.Provider value={{ signedIn, toggleSignedIn }}>
      {children}
    </Context.Provider>
  );
}

export default BtnContextProvider;
