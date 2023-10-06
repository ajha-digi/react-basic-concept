import withHover from "./HOC/HoverHoc";

// eslint-disable-next-line react/prop-types
function Second({count, handleHover}) {

  return (
    <div>
    <h1>{count}</h1>
      <h2 onMouseEnter={handleHover}>Hover 2 here</h2>
    </div>
  )
}

export default withHover(Second);