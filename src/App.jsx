import { useRef, useEffect } from "react";
import "./style.css"
function App() {
  const inputRef = useRef();

  useEffect(() => {
    // inputRef.current.focus();
    inputRef.current.disabled = true;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.disabled = false;
  };

  return (
    <>
      <h1>Hello World !!</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
        />
        <button type="submit">Display</button>
      </form>
    </>
  );
}

export default App;
