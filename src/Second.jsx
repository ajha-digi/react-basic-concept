import { useHover } from "./Hooks/useHover";

function Second() {
const [count, handleHover] = useHover()
  return (
    <div>
      <h1>{count}</h1>
      <h2 onMouseEnter={handleHover}>Hover 2 here</h2>
    </div>
  )
}

export default Second;