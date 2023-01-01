import React, {useState,useEffect} from "react"

function DataFetcher(props){

    const [dataState,setDataState] = useState({
        loading: false,
        data: null
    })


        useEffect(()=>{
            setDataState({loading: true})
            fetch(props.url)
                .then(res => res.json())
                .then(data => setDataState({data: data, loading: false}))
                console.log("useEffect used")
                // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

    return(
       <>
       
                {props.children(dataState.data,dataState.loading)}
     </>
    )
}


export default DataFetcher