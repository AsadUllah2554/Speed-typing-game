import React from "react";

export function withPointlessHOCwithProp(component){

    const Component = component;
    return function(props){
        
        return(
            <Component extraProp="bla bla" {...props}/>
        )
    }

}