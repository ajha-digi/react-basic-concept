import { useContext } from "react";
import { HoverContext } from "./context/rootContext";

function Second() {
  const {count, handleHover} =useContext(HoverContext)
  return (
    <div>
      <h1>{count}</h1>
      <h2 onMouseEnter={handleHover}>Hover 2 here</h2>
    </div>
  )
}

export default Second;