import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function UseEffect() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    useEffect(() => {

   const intervalID  = setInterval(()=>{
    setCount(prevCount => prevCount + 1)
        },1000)
        return () => clearInterval(intervalID)
       
    }, [])

    // cleanup function for useEffect  return () => clearInterval(intervalID)
    
    useEffect(() => {
        setColor(randomcolor())
    }, [count])
    
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default UseEffect
;