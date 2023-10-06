import { useState } from "react";

const withHover = (WrappedComponent) => {
  return function WithHover(props) {
    const [count, setCount] = useState(0);

    const handleHover = () => {
      setCount(count + 1);
    };

    return <WrappedComponent count={count} handleHover={handleHover} {...props} />;
  };
};

export default withHover;