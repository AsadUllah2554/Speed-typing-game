import React from "react"
// import Toggler from "./withToggler"
import useToggler from "./useToggler"

//  <Toggler render={({on,toggle})=>( )
// Remember in Arrow function =>(all things in braces will automatically be returned)
function Menu(props) {
    const [menu, setMenu] = useToggler(true)
    return (
        <div>
            <button onClick={setMenu}>{menu ? "Hide" : "Show"} Menu </button>
            <nav style={{ display: menu ? "block" : "none" }}>
                <h6>Signed in as Coder123</h6>
                <a>Your Profile</a>
                <a>Your Repositories</a>
                <a>Your Stars</a>
                <a>Your Gists</a>
            </nav>
        </div>


        // <Toggler render={({on,toggle})=>(
        //         <div>
        //         <button onClick={toggle}>{on ? "Hide" : "Show"} Menu </button>
        //         <nav style={{display: on ? "block" : "none"}}>
        //             <h6>Signed in as Coder123</h6>
        //             <a>Your Profile</a>
        //             <a>Your Repositories</a>
        //             <a>Your Stars</a>
        //             <a>Your Gists</a>
        //         </nav>
        //     </div>
        //     )
        // }/>
    )
}

export default Menu