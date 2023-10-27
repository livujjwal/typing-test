import { useState } from "react";
import Countdown from "react-countdown";

const TimerDisplay = () => {
    const [timer ,setTimer] = useState(15000)
    return (<div className="timer">
        {
            
        }
        <Countdown date={Date.now() + timer} 
        intervalDelay={0}
        precision={1}
        renderer={(props) => {
        //   console.log(props.total);
        return <div>{Math.floor((props.total)/1000)}</div>}}
        />
           <div className="setTimer">
            <button onClick={() => setTimer(15000)}>15s</button>
            <button onClick={() => setTimer(30000)}>30s</button>
            <button onClick={() => setTimer(60000)}>60s</button>
           </div>
    </div>)
}
export default TimerDisplay;