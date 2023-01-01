import React from "react";
// import {withPointlessHOC} from './PointLessHOC'
import { withPointlessHOCwithProp } from "./PointLessHOCWithProps";


function PointLessApp(props){
    console.log(props)
    return(
        <div>Hello World !! {props.extraProp}</div>

    )
}


// export default withPointlessHOC(PointLessApp)
export default withPointlessHOCwithProp(PointLessApp)