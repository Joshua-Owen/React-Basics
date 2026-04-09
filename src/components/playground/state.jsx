import { useState } from "react";

const StatePlayground = () => {
    let initalCount = 0;
    let [state, setState] = useState(
        {
            count: initalCount,
            user: 'Adam'
        }
    ); 
    console.log(state.count);
    //use state is not aware of single properties
    //once we press the button all it is doing is 
    // replacing the useState object as its using the setState

    // const addOne = () => {
    //     setCount((prevCount) => prevCount+1)
    // }

    // const subOne = () => {
    //     setCount((prevCount) => prevCount-1) 
    // }

    // const resetCount = () => {
    //     setCount(initalCount)
    // }
    return(
        <>
            <h2> {state.user} </h2>
            <h3>Count: {state.count}</h3>
            <button onClick={()=> setState((prevState) =>
                {
                    return{
                        ...prevState, //'...' is the spread operator which "spreads out"(copies) all the properties of the object into a new object 
                        // spreads the prevState "count: 0, user: 'Adam'" into the new object, then adds/overwrites count: 1 

                        // It ensures you copy everything from the old state without mutating it,
                        // and only change the specific property you want. This is key for React's immutability rules.

                        count: prevState.count + 1
                        // so it spreads it out so it has user and count and then we only replace the count variable and the user is left alone
                    }
                }
            )}> Add one</button>
            {/* <button onClick={subOne}> Subtract one</button>
            <button onClick={resetCount}> Reset</button> */}
        </>
    )
}
export default StatePlayground;