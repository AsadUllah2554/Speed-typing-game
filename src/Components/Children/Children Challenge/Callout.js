import React from "react";
import '../../components.css'

function Callout(props){

    return(
    <div className="callout">
        {props.children}
    </div>)
}

export default Callout;