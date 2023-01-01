import React from "react"
// import Toggler from "./withToggler"
import useToggler from "./useToggler"

//  <Toggler render={({on,toggle})=>( )
// Remember in Arrow function =>(all things in braces will automatically be returned)
function Favorite() {
    const [switchToggle,toggle] = useToggler()
  
    return (
        
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                    <span onClick={toggle}>
                    {switchToggle ? "❤️" : "♡"}
                    </span>
                </h1>
          </div>
        // <Toggler render={({ on, toggle }) => (
        //     <div>
        //         <h3>Click heart to favorite</h3>
        //         <h1>
        //             <span onClick={toggle}>
        //                 {on ? "❤️" : "♡"}
        //             </span>
        //         </h1>
        //     </div>
        // )
        // } />

      //  2nd method
     

    )
}

export default Favorite
