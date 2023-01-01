import React from "react";

export function withPointlessHOC(component){
    // HOC is a component that takes component as a parameter
    // Then HOC returns a function with props
    // that function contains some JSX 
    const Component = component;

    return function(props){
        return(
            // we also spread the props to the component
            <Component {...props}/>
        )
    }

}