import { useState } from "react"

export  function Counter(){
    const [counter,setCounter] = useState(0);
    function handleEvent(){
        setCounter(counter+1);
    }
    return (
        <>
        <h1>{counter}</h1>
        <button onClick={handleEvent}>Click me!</button>
        </>
    )
}