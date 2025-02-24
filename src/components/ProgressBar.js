import { useState, useEffect } from 'react';

import "./ProgressBar.css";

export var ProgressBar = ({ playing, playTimer }) => {
  const [value, setValue] = useState(0);
  const [remTime, setRemTime] = useState(0)
  const [maxTime, setMaxTime] = useState(1)

  useEffect(() => {
    if (playing && playTimer) {
      setRemTime( Date.now() - playTimer.start )
      setMaxTime( playTimer.time )
      const percent = remTime/maxTime
      setValue(percent * 700)
      console.log("rem: ", remTime, "max: ", maxTime, "time: ", (maxTime-remTime)/1000)
    }
  });

  return (
    <div className={"progressContainer"}>
      {/* <h1 className="percent-number">{status}</h1> */}
      <div className={"outerProgress"} >
        <div 
          className={"innerProgress"} 
          style={{ 
            width: `${value}px`,
            transition: `all ${remTime/1000}s ${"linear"} `
          }} 
        />
      </div>
    </div>
  );
};