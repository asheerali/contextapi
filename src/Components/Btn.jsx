import  { useContext } from "react";
import { Context } from "../store/BtnContext";

function Btn() {
  const signedInCtx = useContext(Context);
  return (
    <button onClick={signedInCtx.toggleSignedIn}>
      {signedInCtx.signedIn ? "Signed In" : "Signed Out"}
    </button>
  );
}

export default Btn;
