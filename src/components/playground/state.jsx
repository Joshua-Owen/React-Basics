import { useState } from "react";

const StatePlayground = () => {
    let [count,setCount] = useState(0); //when using use state it will ask for a variable and then a function with the function being set+the variable name
                                        //so the format should be "[*VARIABLENAME*, set*VARIABLENAME*] but the set should be in camelcase"
                                        //useState(0) sets the variable count's initail state to 0
    //console.log(count);

    // const addOne = () => {
    //     setCount(++count);
    // }
    return(
        <>
            <h3>Count: {count}</h3>
            <button onClick={/*addOne*//*if you want a external func that adds 1 or*/() => setCount(++count)/*for a in line function that does the same*/}> Add one</button>
        </>
    )
}
export default StatePlayground;