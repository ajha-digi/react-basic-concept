import { useHover } from "./Hooks/useHover";
function Third() {
  const [count, handleHover] = useHover();
  return (
    <div>
       <h1>{count}</h1>
      <h2 onMouseEnter={handleHover}>Hover3 here</h2>
    </div>
  )
}

export default Third;