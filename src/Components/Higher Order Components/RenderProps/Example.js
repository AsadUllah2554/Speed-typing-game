import React from "react"

// we can pass functions as a props
// those functions can render JSX also
function Example(props){

    return(
    <div>
     {props.render(false)}
    </div>
    )
}

export default Example