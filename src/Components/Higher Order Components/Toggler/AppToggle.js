import React from "react"
import Menu from "./Menu"
import Favorite from "./Favorite"

function AppToggle() {
    return (
        <div>
            <Menu something="whatever" />
            <hr />
            <Favorite />
        </div>
    )
}

export default AppToggle;