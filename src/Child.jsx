import {forwardRef} from "react";
import Third from "./Third";

// eslint-disable-next-line react/prop-types
const Input = forwardRef(function Child(props, ref) {
  return <Third ref={ref}/>;
})

export default Input;
