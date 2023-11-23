import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeout}){

    const [remainingTime, setRemainingTime] = useState(timeout);

    
    useEffect(()=>{
        console.log('TIMEOUT SET')
        const timer = setTimeout(onTimeout, timeout);

        return ()=>{
            clearTimeout(timer);
        }
    }, [timeout, onTimeout])

    useEffect(()=>{
        console.log('INTERVAL SET')
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 10)
        }, 10);

        return ()=>{
            clearInterval(interval)
        }
    }, []);



    

    return <progress value={remainingTime} max={timeout} id="question-time" />;
}