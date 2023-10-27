import { useState } from "react";
import { FaArrowRotateLeft,FaRulerHorizontal } from "react-icons/fa6";
const TimerSetting = () => {
  const [placeholder, setPlaceholder] = useState();
  return (
    <div className="setting">
     <div className="reset"><FaArrowRotateLeft/></div>
    <p> <button>esc</button><span> - </span> <span>reset</span></p>
    <div className="words">
        <button>10</button>
        <button>20</button>
        <button>50</button>
        <button>80</button>
        <button>100</button>
        <p><span>-</span><span>no. of worsds</span></p>
    </div>
    </div>
  );
};
export default TimerSetting;