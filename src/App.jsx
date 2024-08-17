import "./App.css";
import Nav from "./Components/Nav";
import BtnContextProvider from "./store/BtnContext";
import Body from "./Components/Body";


function App() {
  return (
    <BtnContextProvider>
      <Nav />
      <Body/>
    </BtnContextProvider>
  );
}

export default App;
