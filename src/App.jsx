import {useEffect, useRef} from "react";
import "./style.css"
import Child from "./Child";
function App() {
  const inputRef = useRef();
  const inpRef = useRef();
  
  useEffect(()=>{
    inpRef.current.disabled=true;
  },[])

  useEffect(()=>{
    inputRef.current.focus();
  },[])
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <>
      <h1>Hello World !!</h1>
      <form onSubmit={handleSubmit}>
        <Child ref={inputRef}/>
        <input id="test" ref={inpRef}/>
        <button type="submit">Display</button>
      </form>
    </>
  );
}

export default App;
