import { useContext } from "react";
import Second from "./Second";
import Third from "./Third";
import { HoverContext } from "./context/rootContext";

function App() {
 const {count, handleHover} =useContext(HoverContext)

  return (
    <div>
      <h1>{count}</h1>
      <h2 onMouseEnter={handleHover}>Hover 1 here</h2>
      <Second />
      <Third />
    </div>
   
  );
}

export default App
