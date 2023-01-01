import React from "react"
import Card from "./Card"

function DefaultProps() {
    return (
        <div>
            <Card cardColor="red" height={100} width={250}/>
            <Card cardColor="orange"/>
            <Card cardColor="green" height={100} width={350}/>
            
        </div>
    )
}

export default DefaultProps;