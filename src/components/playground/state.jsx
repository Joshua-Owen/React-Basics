import { useState } from "react";

const StatePlayground = () => {
    let initalCount = 0; //this can allow us to have reference to the counts original value and allows us to create the reset button
    let [count,setCount] = useState(initalCount); 
    console.log(count);


    const addOne = () => {
        //setCount(++count) This mutates the closure variable and is not the React-recommended approach.
        //setCount(count + 1) Adds 1 to count and passes the result, without mutation. This is slightly better, but still problematic.
        setCount((prevCount) => prevCount+1)
    }

    const subOne = () => {
    //setCount(--count); This mutates the closure variable and is not the React-recommended approach.
    
    setCount((prevCount) => prevCount-1) //Uses the functional form of setCount, 
                                        // which receives the current state value and returns the new value. 
                                        // This is the correct way to update state based on the previous state.
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