import { useContext } from "react";
import { Context } from "../store/BtnContext";

function Body() {
  const signedInCtx = useContext(Context);

  return (
    <div>
      <h1>{signedInCtx.signedIn ? "Signed In" : "Signed Out"}</h1>
    </div>
  );
}

export default Body;
