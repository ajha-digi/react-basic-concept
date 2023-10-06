import { useState } from "react";

export const useHover = () => {
    const [count, setCount] = useState(0);
    const handleHover = () => {
        setCount(count+1)
    }
    return [count, handleHover];
}