import React, { useContext } from "react";
import { Context } from "../store/BtnContext";

function Btn() {
  const [signedIn, setSignedIn] = useContext(Context);
  return (
    <button onClick={() => setSignedIn(!signedIn)}>
      {signedIn ? "Signed In" : "Signed Out"}
    </button>
  );
}

export default Btn;
