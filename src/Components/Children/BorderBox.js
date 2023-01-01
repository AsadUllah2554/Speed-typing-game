import React from "react"
import '../components.css'

function BorderBox(props){

    return(
        <div className="border">
            {props.children}

        </div>
    )
}

export default BorderBox