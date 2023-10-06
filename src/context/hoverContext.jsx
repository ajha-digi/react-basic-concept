import { useState, useMemo } from "react";
import { HoverContext } from "./rootContext";

// eslint-disable-next-line react/prop-types
const HoverProvider = ({children}) =>{
    const [count, setCount] = useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleHover = () => {
        setCount(count+1)
    }
    const value = useMemo(()=>({
        count,
        handleHover
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }),[count])
    
    return (
        <HoverContext.Provider value={value}>
            {children}
        </HoverContext.Provider>
    )
}

export default HoverProvider;
