import { useHover } from "./Hooks/useHover";
import Second from "./Second";
import Third from "./Third";

function App() {
  const [count, handleHover] = useHover();
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
