import React,{useState,useEffect,useRef} from "react";


import "./styles.css"

function SpeedGame(){
    const inputFocus = useRef(null);

   
    const [typedText,setTypedText] = useState("")
    const [time,setTime] = useState({
        time:"",
    })
    const [remainingTime,setRemainingTime] = useState(0)
    const [isGameStarted,setIsGameStarted] = useState(false);
    const [wordCount,setWordCount] = useState(0)
   

    function handleChange(e){
        const {value} = e.target
        setTypedText(value)
    }

    function handleTime(e){
        const {value} = e.target
        setTime(parseInt(value))
    }

    function startGame(){
       
            setWordCount(0)
            setIsGameStarted(true)
            setRemainingTime(time)
            setTypedText("")
            inputFocus.current.disabled = false
            inputFocus.current.focus()


    }

    function endGame(){
        setIsGameStarted(false)
        setWordCount(calculateWords(typedText))
        setTime(0)
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
            <h4>{!isGameStarted ? "Select time": "Remaining Time"}:  
{!isGameStarted ? 
            <select  
            id="selectedTime"
            value={time.time}
            onChange={handleTime}
            name="time">
                <option value="">-- Select Time --</option>
                <option value="10">10 seconds</option>
                <option value="20">20 seconds</option>
                <option value="40">40 seconds</option>
                <option value="50">50 seconds</option>
                <option value="60">60 seconds</option>
                <option value="120">120 seconds</option>
            </select> :
            <p>{remainingTime}</p>
            
           
        }

            </h4>
            <button onClick={startGame} disabled={ isGameStarted }>Start Game</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default SpeedGame;