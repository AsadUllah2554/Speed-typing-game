import redux,{configureStore} from "redux"
import {Provider} from "react-redux"
// 1. Create action creators for having the count "increment" and "decrement"
// ACTION CREATORS:
function increment(){
    return{
        type:"INCREMENT"
    }
}

function decrement(){
    return{
        type:"DECREMENT"
    }
}

// 2. Create a reducer to handle your increment and decrement actions
// REDUCER:
function reducer(count = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}

// 3. Create a new Redux store
// REDUX STORE:
const store = configureStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store