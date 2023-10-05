import {forwardRef} from "react";

// eslint-disable-next-line react/prop-types
const Third = forwardRef(function Third(props, ref) {
  return <input ref={ref}/>;
})

export default Third;