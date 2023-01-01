import {useState} from "react"

function useToggler(defaultOnValue=false){
    const [state,setState] = useState(defaultOnValue)

    const toggle = () => {
        setState(prevState => !prevState)
       
    } 

    return [state,toggle]
}

export default useToggler