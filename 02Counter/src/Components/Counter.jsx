import React from 'react'
import { useState } from 'react'

const Counter = () => {
    let [counter, setCounter] = useState(0);

    const AddValue = () => {
        // setCounter(counter + 1)
        // use prevCounter for incr 4,5 times at one click
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)

    }
    const RemoveValue = () => {
        setCounter(counter - 1)

    }
    return (
        <div>
            <h1>Counter Variables {counter}</h1>
            <button onClick={AddValue}>Add:</button>

            <button onClick={RemoveValue}>Remove:</button>
            <h2> Value : {counter} </h2>
        </div>
    )
}

export default Counter
