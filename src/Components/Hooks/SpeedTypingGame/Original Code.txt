import React,{useState,useEffect,useRef} from "react";


import "./styles.css"

function SpeedGame(){
    const inputFocus = useRef(null);

    const Starting_Time = 10
    const [typedText,setTypedText] = useState("")
    const [remainingTime,setRemainingTime] = useState(Starting_Time)
    const [isGameStarted,setIsGameStarted] = useState(false);
    const [wordCount,setWordCount] = useState(0)
   

    function handleChange(e){
        const {value} = e.target
        setTypedText(value)
    }

    function startGame(){
        setIsGameStarted(true)
        setRemainingTime(Starting_Time)
        setTypedText("")
        inputFocus.current.disabled = false
        inputFocus.current.focus()

    }

    function endGame(){
        setIsGameStarted(false)
        setWordCount(calculateWords(typedText))
    }
    useEffect(()=>{
        if(isGameStarted  && remainingTime !== 0 ){
        setTimeout(()=>{
            setRemainingTime(time=> time-1)
        },1000);}else if(remainingTime ===0){
            endGame()
        }

    },[remainingTime,isGameStarted])

    function calculateWords(typedText){
        const words = typedText.trim().split(" ")
        return words.filter(word=> word !== "").length;
    }

    return(
        <div >
            <h1>Speed Typing Game</h1>
            <textarea
            ref={inputFocus}
            value={typedText}
            onChange={handleChange}
            disabled={!isGameStarted} />
            <h4>Time Remaining: {remainingTime}</h4>
            <button onClick={startGame} disabled={isGameStarted}>Start Game</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default SpeedGame;