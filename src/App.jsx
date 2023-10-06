import withHover from "./HOC/HoverHoc";
import Second from "./Second";
import Third from "./Third";

// eslint-disable-next-line react/prop-types
function App({count, handleHover}) {
  return (
    <div>
      <h1>{count}</h1>
      <h2 onMouseEnter={handleHover}>Hover 1 here</h2>
      <Second />
      <Third />
    </div>
   
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withHover(App);
