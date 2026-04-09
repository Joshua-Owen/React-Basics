import { useState } from "react";

const StatePlayground = () => {
    let initalCount = 0; 
    let [count,setCount] = useState(initalCount); 
    console.log(count);


    const addOne = () => {
       
        setCount((prevCount) => prevCount+1)
    }

    const subOne = () => {
    
    
    setCount((prevCount) => prevCount-1) 
    }

    const resetCount = () => {
        setCount(initalCount)
    }
    return(
        <>
            <h3>Count: {count}</h3>
            <button onClick={addOne}> Add one</button>
            <button onClick={subOne}> Subtract one</button>
            <button onClick={resetCount}> Reset</button>
        </>
    )
}
export default StatePlayground;