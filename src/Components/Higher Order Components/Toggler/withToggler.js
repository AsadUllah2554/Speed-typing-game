import React from "react"
import {useState} from "react"

// this components is receiving a function as props and 
//then giving it the state and setState function

function Toggler(props)  {
   const [state,setState] = useState({
        on: true,
    })
    
 const toggle = () => {
        setState(prevState => ({on: !prevState.on}))
    } 
   return (
            <div>
                {props.render({
                    on: state.on, 
                    toggle: toggle
                })}
            </div>
        )
 
}

export default Toggler