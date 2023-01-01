import React from "react"
import Example from "./Example"
// we can pass functions as a props
// those functions can render JSX also
function RenderProps(){

    return(
        <div>
            <Example render={function(isDay)  { return(<>
            <h1>{isDay ? "Good Day": "Good Evening"}, Asad</h1>
          </>) 
             }}/>
        </div>
    )
}

export default RenderProps