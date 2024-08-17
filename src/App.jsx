import { useContext } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import BtnContextProvider, { Context } from "./store/BtnContext";

function App() {
  return (
    <BtnContextProvider>
      <Nav />
      <Status />
    </BtnContextProvider>
  );
}

function Status() {
  const [signedIn] = useContext(Context);
  return <h1>{signedIn ? "Signed In" : "Signed Out"}</h1>;
}

export default App;
